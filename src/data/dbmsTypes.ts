export interface DbmsTable {
  title?: string;
  headers: string[];
  rows: (string | number)[][];
}

export interface DbmsDiagram {
  type: string;
  caption?: string;
  subType?: string;
}

export interface DbmsOption {
  id: string; // 'a' | 'b' | 'c' | 'd'
  text: string;
  table?: DbmsTable;
}

export interface DbmsQuestion {
  id: number;
  assignment: number; // 1 to 8
  assignmentTitle: string;
  topic: string;
  questionType?: 'MCQ' | 'MSQ';
  marks?: number;
  question: string;
  table?: DbmsTable;
  additionalTables?: DbmsTable[];
  diagram?: DbmsDiagram;
  codeSnippet?: string;
  options: DbmsOption[];
  correctOptionId: string; // e.g. 'b' or 'a, b'
  correctOptionIds?: string[]; // for MSQs e.g. ['a', 'b']
  explanation: string;
  explanationDiagram?: DbmsDiagram;
}

export interface DbmsAssignmentMeta {
  id: number;
  title: string;
  count: number;
}
