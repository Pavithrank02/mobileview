// src/ExperienceNode.js
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';

const ExperienceNode = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ marginBottom: 2, marginLeft: expanded ? 2 : 0 }}>
      <CardContent>
        <Typography variant="h6">{data.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
        {data.children && (
          <IconButton
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        )}
      </CardContent>
      {data.children && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent sx={{ paddingLeft: 4 }}>
            {data.children.map((child) => (
              <ExperienceNode key={child.id} data={child} />
            ))}
          </CardContent>
        </Collapse>
      )}
    </Card>
  );
};

export default ExperienceNode;
