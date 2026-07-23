const fs = require('fs');
let content = fs.readFileSync('views/blog/AgenceSeoFrance2026.tsx', 'utf8');

content = content.replace(
  "import { ArrowLeft, ArrowRight, Share2, CheckCircle2, Search, BarChart3 } from 'lucide-react';",
  "import { ArrowLeft, Share2, Search } from 'lucide-react';"
);

fs.writeFileSync('views/blog/AgenceSeoFrance2026.tsx', content);
