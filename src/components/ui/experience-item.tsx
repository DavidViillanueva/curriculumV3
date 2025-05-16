"use client"

import { Box, Chip, Paper, Typography } from "@mui/material"

interface ExperienceItemProps {
  title: string
  company: string
  period: string
  description: string
}

export default function ExperienceItem({ title, company, period, description }: ExperienceItemProps) {
  return (
    <Paper elevation={1} sx={{ p: 3, mb: 3 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          mb: 2,
        }}
      >
        <Box>
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>
          <Typography color="text.secondary">{company}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mt: { xs: 1, md: 0 },
          }}
        >
          <Chip variant="outlined" label="Full-time" size="small" />
          <Typography variant="body2" color="text.secondary">
            {period}
          </Typography>
        </Box>
      </Box>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Paper>
  )
}
