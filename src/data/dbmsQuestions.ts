import { DbmsQuestion, DbmsAssignmentMeta } from './dbmsTypes';
import { DBMS_ASSIGNMENT_1_2 } from './dbmsAssignments1to2';
import { DBMS_ASSIGNMENT_3_4 } from './dbmsAssignments3to4';
import { DBMS_ASSIGNMENT_5_6 } from './dbmsAssignments5to6';
import { DBMS_ASSIGNMENT_7_8 } from './dbmsAssignments7to8';

export * from './dbmsTypes';

export const DBMS_ASSIGNMENTS: DbmsAssignmentMeta[] = [
  { id: 1, title: 'Assignment 1: DB Abstraction, Keys & Relational Algebra (Q1 - Q10)', count: 10 },
  { id: 2, title: 'Assignment 2: SQL DDL/DML, Joins, Group By & Views (Q11 - Q20)', count: 10 },
  { id: 3, title: 'Assignment 3: Relational Calculus, Triggers & ER Models (Q21 - Q30)', count: 10 },
  { id: 4, title: 'Assignment 4: Functional Dependencies & Normalization (Q31 - Q40)', count: 10 },
  { id: 5, title: 'Assignment 5: Storage Architecture, RAID & Buffer Mgmt (Q41 - Q50)', count: 10 },
  { id: 6, title: 'Assignment 6: Indexing, B+ Trees, 2-3-4 Trees & Hashing (Q51 - Q60)', count: 10 },
  { id: 7, title: 'Assignment 7: Transactions, Serializability & 2PL Locking (Q61 - Q70)', count: 10 },
  { id: 8, title: 'Assignment 8: Crash Recovery, Checkpoints & Query Optimization (Q71 - Q80)', count: 10 },
];

export const DBMS_QUESTIONS: DbmsQuestion[] = [
  ...DBMS_ASSIGNMENT_1_2,
  ...DBMS_ASSIGNMENT_3_4,
  ...DBMS_ASSIGNMENT_5_6,
  ...DBMS_ASSIGNMENT_7_8,
];
