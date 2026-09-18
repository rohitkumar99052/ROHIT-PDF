import { LucideIcon } from 'lucide-react';

export type ToolCategory = 
  | 'All' 
  | 'Workflows' 
  | 'Organize PDF' 
  | 'Optimize PDF' 
  | 'Convert PDF' 
  | 'Edit PDF' 
  | 'PDF Security' 
  | 'PDF Intelligence';

export interface PDFTool {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: ToolCategory[];
  color: string;
  action: string;
  featured?: boolean;
}
