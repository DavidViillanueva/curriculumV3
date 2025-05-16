"use client"

import { Avatar, Paper, Typography, useTheme } from "@mui/material"
import { Code as CodeIcon } from "@mui/icons-material"

interface SkillItemProps {
  name: string
}

export default function SkillItem({ name }: SkillItemProps) {
  const theme = useTheme()

  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Avatar
        sx={{
          bgcolor: theme.palette.primary.light,
          color: theme.palette.primary.contrastText,
          width: 48,
          height: 48,
        }}
      >
        <CodeIcon />
      </Avatar>
      <Typography variant="body1" fontWeight="medium">
        {name}
      </Typography>
    </Paper>
  )
}
