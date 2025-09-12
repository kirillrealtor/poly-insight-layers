import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  CircularProgress,
  Link,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import { CheckCircle, Cancel } from "@mui/icons-material";

// Committee → color map
const committeeColors = {
  "House - Appropriations": "primary",
  "House - Armed Services": "secondary",
  "House - Judiciary": "success",
  "House - Energy & Commerce": "error",
  "House - Oversight and Reform": "warning",
  "Senate - Intelligence": "info",
  // add more committees here...
};

// API call for trades
const fetchTrades = async () => {
  const res = await axios.get("http://127.0.0.1:8000/trades/?skip=0&limit=1000");
  return res.data;
};

// API call for politicians
const fetchPoliticians = async () => {
  const res = await axios.get("http://127.0.0.1:8000/politicians");
  return res.data;
};

export default function TradesTable() {
  const { data: trades, isLoading: tradesLoading, isError: tradesError } = useQuery({
    queryKey: ["trades"],
    queryFn: fetchTrades,
  });

  const { data: politicians, isLoading: polLoading, isError: polError } = useQuery({
    queryKey: ["politicians"],
    queryFn: fetchPoliticians,
  });

  const [search, setSearch] = useState("");
  const [selectedCommittee, setSelectedCommittee] = useState("");
  const [visibleRows, setVisibleRows] = useState(10);

  if (tradesLoading || polLoading) return <CircularProgress />;
  if (tradesError || polError) return <Typography color="error">Error loading data.</Typography>;

  // Quick lookup for politicians
  const politicianMap = {};
  politicians.forEach((p) => {
    politicianMap[p.id] = p;
  });

  // Filter trades
  const filteredTrades = trades.filter((trade) => {
    const pol = politicianMap[trade.politician_id];
    if (!pol) return false;

    const matchesSearch =
      pol.name.toLowerCase().includes(search.toLowerCase()) ||
      String(pol.id).includes(search) ||
      (pol.committees || []).some((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );

    const matchesCommittee =
      !selectedCommittee ||
      (pol.committees || []).some((c) => c.name === selectedCommittee);

    return matchesSearch && matchesCommittee;
  });

  return (
    <Box sx={{ p: 4, fontFamily: "serif" }}>
      {/* Heading */}
      <Typography
        variant="h3"
        gutterBottom
        sx={{ fontWeight: "bold", textAlign: "center", color: "#2c3e50" }}
      >
        Insider Trading of Politicians
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        sx={{
          textAlign: "center",
          mb: 3,
          color: "gray",
          fontStyle: "italic",
          fontSize: "1.1rem",
        }}
      >
        A detailed look into financial trades made by U.S. lawmakers, their parties,
        and the committees they serve on.
      </Typography>

      {/* Filters */}
      <Box sx={{ display: "flex", gap: 2, mb: 3, justifyContent: "center" }}>
        <TextField
          label="Search by name, ID, or committee"
          variant="outlined"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ minWidth: 300 }}
        />
        <TextField
          select
          label="Filter by Committee"
          variant="outlined"
          size="small"
          value={selectedCommittee}
          onChange={(e) => setSelectedCommittee(e.target.value)}
          sx={{ minWidth: 250 }}
        >
          <MenuItem value="">All Committees</MenuItem>
          {Array.from(
            new Set(
              politicians.flatMap((p) => p.committees?.map((c) => c.name) || [])
            )
          ).map((cname) => (
            <MenuItem key={cname} value={cname}>
              {cname}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      {/* Table */}
      <TableContainer component={Paper} sx={{ borderRadius: 4, boxShadow: 5 }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#f4f6f8" }}>
            <TableRow>
              <TableCell><strong>#</strong></TableCell>
              <TableCell><strong>Politician</strong></TableCell>
              <TableCell><strong>Committees</strong></TableCell>
              <TableCell><strong>Party</strong></TableCell>
              <TableCell><strong>State</strong></TableCell>
              <TableCell><strong>Company</strong></TableCell>
              <TableCell><strong>Ticker</strong></TableCell>
              <TableCell><strong>Type</strong></TableCell>
              <TableCell><strong>Amount</strong></TableCell>
              <TableCell><strong>Trade Date</strong></TableCell>
              <TableCell><strong>Published</strong></TableCell>
              <TableCell><strong>Document</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTrades.slice(0, visibleRows).map((trade, index) => {
              const pol = politicianMap[trade.politician_id];
              return (
                <TableRow key={trade.id} hover>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{pol ? pol.name : `Unknown (${trade.politician_id})`}</TableCell>

                  {/* Committees */}
                  <TableCell>
                    {pol?.committees?.length > 0 ? (
                      pol.committees.map((c) => (
                        <Chip
                          key={c.id}
                          label={c.name}
                          size="small"
                          sx={{ m: 0.3, fontWeight: "bold" }}
                          color={committeeColors[c.name] || "default"}
                        />
                      ))
                    ) : (
                      "N/A"
                    )}
                  </TableCell>

                  <TableCell>{pol?.party || "N/A"}</TableCell>
                  <TableCell>{pol?.state || "N/A"}</TableCell>
                  <TableCell>{trade.issuer || "N/A"}</TableCell>
                  <TableCell>{trade.ticker || "-"}</TableCell>
                  <TableCell>
                    <Chip
                      label={trade.trade_type}
                      color={trade.trade_type?.toLowerCase() === "buy" ? "success" : "error"}
                      icon={
                        trade.trade_type?.toLowerCase() === "buy" ? (
                          <CheckCircle />
                        ) : (
                          <Cancel />
                        )
                      }
                    />
                  </TableCell>
                  <TableCell>{trade.size || "Unknown"}</TableCell>
                  <TableCell>
                    {trade.trade_date
                      ? new Date(trade.trade_date).toLocaleDateString()
                      : "-"}
                  </TableCell>
                  <TableCell>
                    {trade.published_date
                      ? new Date(trade.published_date).toLocaleDateString()
                      : "-"}
                  </TableCell>
                  <TableCell>
                    {trade.filing_url ? (
                      <Link href={trade.filing_url} target="_blank" rel="noopener">
                        PDF
                      </Link>
                    ) : (
                      "N/A"
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Show More */}
      {visibleRows < filteredTrades.length && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Button
            variant="contained"
            onClick={() => setVisibleRows((prev) => prev + 10)}
            sx={{
              borderRadius: "20px",
              px: 4,
              backgroundColor: "#2c3e50",
              "&:hover": { backgroundColor: "#1a242f" },
            }}
          >
            Show More
          </Button>
        </Box>
      )}
    </Box>
  );
}
