import { DbmsQuestion } from './dbmsTypes';

export const DBMS_ASSIGNMENT_7_8: DbmsQuestion[] = [
  // ==================== ASSIGNMENT 7 (Questions 61 to 70) ====================
  {
    id: 61,
    assignment: 7,
    assignmentTitle: 'Assignment 7',
    topic: 'Conflict & View Serializability',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the following schedule S involving five transactions T1, T2, T3, T4 and T5:\n\nChoose the correct option for the above transaction schedule.',
    table: {
      title: 'Schedule S',
      headers: ['T1', 'T2', 'T3', 'T4', 'T5'],
      rows: [
        ['', 'W(X)', '', '', ''],
        ['R(X)', '', '', '', ''],
        ['', '', 'R(X)', '', ''],
        ['', '', '', '', 'W(Z)'],
        ['', '', '', 'R(Z)', ''],
        ['', '', 'W(X)', '', ''],
        ['R(Z)', '', '', '', '']
      ]
    },
    diagram: {
      type: 'asgn7-q1-graph',
      caption: 'Precedence Graph: Nodes T1, T2, T3, T4, T5 (acyclic)'
    },
    options: [
      { id: 'a', text: 'The schedule is both view and conflict serializable schedule.' },
      { id: 'b', text: 'The schedule is neither conflict serializable nor view serializable schedule.' },
      { id: 'c', text: 'The schedule is only view serializable schedule.' },
      { id: 'd', text: 'The schedule is only conflict serializable schedule.' }
    ],
    correctOptionId: 'a',
    correctOptionIds: ['a'],
    explanation: 'Drawing the precedence graph of conflicting operations:\n• T2 writes X before T1 reads X: T2 → T1\n• T2 writes X before T3 reads X and writes X: T2 → T3\n• T1 reads X before T3 writes X: T1 → T3\n• T5 writes Z before T4 reads Z: T5 → T4\n• T5 writes Z before T1 reads Z: T5 → T1\nThe resulting directed precedence graph contains NO cycles. Therefore, S is conflict serializable. Since every conflict serializable schedule is also view serializable, S is both view and conflict serializable.\nHence, option (a) is correct.'
  },
  {
    id: 62,
    assignment: 7,
    assignmentTitle: 'Assignment 7',
    topic: 'Conflict Serializable Schedules & Topological Sort',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the following schedule S involving five transactions T1, T2, T3, T4, and T5:\n\nIdentify the possible number of conflict serializable schedules corresponding to the above schedule.',
    table: {
      title: 'Schedule S',
      headers: ['T1', 'T2', 'T3', 'T4', 'T5'],
      rows: [
        ['R(X)', '', '', '', ''],
        ['', 'W(X)', '', '', ''],
        ['', '', '', 'R(Z)', ''],
        ['', '', 'W(X)', '', ''],
        ['W(Z)', '', '', '', ''],
        ['', '', '', '', 'R(Z)']
      ]
    },
    diagram: {
      type: 'asgn7-q2-graph',
      caption: 'Precedence Graph Edges: T4 → T1, T1 → T2, T1 → T3, T1 → T5, T2 → T3'
    },
    options: [
      { id: 'a', text: '2' },
      { id: 'b', text: '3' },
      { id: 'c', text: '4' },
      { id: 'd', text: '5' }
    ],
    correctOptionId: 'b',
    correctOptionIds: ['b'],
    explanation: 'The precedence edges are: T4 → T1, T1 → T2, T1 → T3, T1 → T5, T2 → T3.\nSince the graph is acyclic, every topological sort represents an equivalent serial schedule:\n1. T4 → T1 → T2 → T3 → T5\n2. T4 → T1 → T2 → T5 → T3\n3. T4 → T1 → T5 → T2 → T3\nThere are exactly 3 possible topological orderings.\nHence, option (b) is correct.'
  },
  {
    id: 63,
    assignment: 7,
    assignmentTitle: 'Assignment 7',
    topic: 'Deadlock Wait-For Graph Identification',
    questionType: 'MCQ',
    marks: 2,
    question: 'Suppose in a database, there are four transactions T1, T2, T3 and T4. Transaction T1 is waiting for transactions T3 and T4, transaction T2 is waiting for transaction T3, and transaction T3 is waiting for transaction T4 to release a data item.\n\nIdentify the correct wait-for graph for the above scenario.',
    diagram: {
      type: 'asgn7-q3-waitfor',
      caption: 'Wait-for Graph Options (a, b, c, d)'
    },
    options: [
      { id: 'a', text: 'Graph (a)' },
      { id: 'b', text: 'Graph (b)' },
      { id: 'c', text: 'Graph (c)' },
      { id: 'd', text: 'Graph (d)' }
    ],
    correctOptionId: 'c',
    correctOptionIds: ['c'],
    explanation: 'In a wait-for graph, if transaction Ti waits for Tj, a directed edge Ti → Tj is drawn:\n• T1 waits for T3 and T4: edges T1 → T3 and T1 → T4.\n• T2 waits for T3: edge T2 → T3.\n• T3 waits for T4: edge T3 → T4.\nGraph (c) contains exactly these four directed edges: T1 → T3, T1 → T4, T2 → T3, and T3 → T4.\nHence, option (c) is correct.'
  },
  {
    id: 64,
    assignment: 7,
    assignmentTitle: 'Assignment 7',
    topic: 'Equivalent Serial Schedules',
    questionType: 'MCQ',
    marks: 2,
    question: 'The following table shows the values of the database items before and after the execution of a schedule involving two transactions T1 and T2.\n\nThe transactions are defined as follows:\nT1: A := A − 400, B := B + 400\nT2: A := A − 100, D := D + 100\n\nWhich of the following serial schedules is equivalent to the above execution?',
    table: {
      title: 'Database Items',
      headers: ['Data Item', 'Initial Value', 'Final Value'],
      rows: [
        ['A', 1000, 500],
        ['B', 500, 900],
        ['D', 300, 400]
      ]
    },
    options: [
      { id: 'a', text: 'Only T1 followed by T2' },
      { id: 'b', text: 'Only T2 followed by T1' },
      { id: 'c', text: 'Both T1 followed by T2 and T2 followed by T1' },
      { id: 'd', text: 'Neither T1 followed by T2 nor T2 followed by T1' }
    ],
    correctOptionId: 'c',
    correctOptionIds: ['c'],
    explanation: 'Initially: A = 1000, B = 500, D = 300.\n• In serial schedule T1 → T2: A becomes 1000 - 400 - 100 = 500, B becomes 500 + 400 = 900, D becomes 300 + 100 = 400.\n• In serial schedule T2 → T1: A becomes 1000 - 100 - 400 = 500, B becomes 900, D becomes 400.\nBoth serial schedules yield the identical final state (A=500, B=900, D=400).\nHence, option (c) is correct.'
  },
  {
    id: 65,
    assignment: 7,
    assignmentTitle: 'Assignment 7',
    topic: 'Lock Compatibility Matrix',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the following lock compatibility matrix, where S denotes a shared lock and X denotes an exclusive lock.\n\nSuppose transaction T1 has already acquired a lock on data item A. Which one of the following lock requests by another transaction T2 will be granted immediately?',
    table: {
      title: 'Lock Compatibility Matrix',
      headers: ['', 'S', 'X'],
      rows: [
        ['S', 'True', 'False'],
        ['X', 'False', 'False']
      ]
    },
    options: [
      { id: 'a', text: 'T1 holds an S lock on A, and T2 requests an S lock on A.' },
      { id: 'b', text: 'T1 holds an S lock on A, and T2 requests an X lock on A.' },
      { id: 'c', text: 'T1 holds an X lock on A, and T2 requests an S lock on A.' },
      { id: 'd', text: 'T1 holds an X lock on A, and T2 requests an X lock on A.' }
    ],
    correctOptionId: 'a',
    correctOptionIds: ['a'],
    explanation: 'According to the lock compatibility matrix, only (S, S) evaluates to True. Any combination involving an Exclusive (X) lock evaluates to False. Therefore, only when T1 holds an S lock and T2 requests an S lock will it be granted immediately.\nHence, option (a) is correct.'
  },
  {
    id: 66,
    assignment: 7,
    assignmentTitle: 'Assignment 7',
    topic: 'Wait-Die Deadlock Prevention Scheme',
    questionType: 'MCQ',
    marks: 2,
    question: 'A database system uses the Wait-Die deadlock prevention scheme. Transaction T1 has timestamp 8, and transaction T2 has timestamp 15. Transaction T2 has already acquired an exclusive lock on data item X. Transaction T1 now requests an exclusive lock on X.\n\nWhich of the following statements is correct?',
    options: [
      { id: 'a', text: 'Transaction T1 waits until transaction T2 releases the lock.' },
      { id: 'b', text: 'Transaction T1 is rolled back.' },
      { id: 'c', text: 'Transaction T2 is rolled back.' },
      { id: 'd', text: 'Both transactions T1 and T2 are rolled back.' }
    ],
    correctOptionId: 'a',
    correctOptionIds: ['a'],
    explanation: 'In the Wait-Die non-preemptive scheme:\n• If older transaction Ti requests a lock held by younger Tj (TS(Ti) < TS(Tj)): Ti is allowed to WAIT.\n• If younger transaction Ti requests a lock held by older Tj (TS(Ti) > TS(Tj)): Ti DIES (rolls back).\nHere, T1 (TS=8) is older than T2 (TS=15). Thus T1 is allowed to wait until T2 releases the lock.\nHence, option (a) is correct.'
  },
  {
    id: 67,
    assignment: 7,
    assignmentTitle: 'Assignment 7',
    topic: 'Strict 2PL vs Rigorous 2PL Protocol',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the following two transactions where lock-X(A) denotes an Exclusive lock on A, and lock-S(A) denotes a Shared lock on A:\n\nWhich of the following statement(s) is/are true?',
    table: {
      title: 'Transaction Schedules',
      headers: ['T1', 'T2'],
      rows: [
        ['lock-S(A)', 'lock-X(A)'],
        ['read(A)', 'read(A)'],
        ['lock-X(B)', 'write(A)'],
        ['read(B)', 'lock-S(B)'],
        ['write(B)', 'read(B)'],
        ['unlock(A)', 'commit'],
        ['commit', 'unlock(A)'],
        ['unlock(B)', 'unlock(B)']
      ]
    },
    options: [
      { id: 'a', text: 'T1 follows only the rigorous two-phase locking protocol, whereas T2 follows the strict two-phase locking protocol.' },
      { id: 'b', text: 'T1 follows the strict two-phase locking protocol, whereas T2 follows the rigorous two-phase locking protocol.' },
      { id: 'c', text: 'Both T1 and T2 follow the rigorous two-phase locking protocol.' },
      { id: 'd', text: 'Neither T1 nor T2 follows the two-phase locking protocol.' }
    ],
    correctOptionId: 'b',
    correctOptionIds: ['b'],
    explanation: '• Strict 2PL: All Exclusive (X) locks must be held until commit; Shared (S) locks may be unlocked earlier. T1 unlocks S(A) before commit, but holds X(B) until after commit. So T1 satisfies Strict 2PL, but NOT Rigorous 2PL.\n• Rigorous 2PL: Both Shared (S) and Exclusive (X) locks must be held until commit. T2 holds both X(A) and S(B) until commit, unlocking both only after commit. So T2 satisfies Rigorous 2PL.\nHence, option (b) is correct.'
  },
  {
    id: 68,
    assignment: 7,
    assignmentTitle: 'Assignment 7',
    topic: 'Deadlock Freedom in Locking Schedules',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider two schedules S1 and S2 as follows, where S denotes a shared mode lock and X denotes an exclusive mode lock.\n\nIdentify the correct statement from the following which relates to whether the schedules are deadlock free. (Note: if any schedule suffers from deadlock, some operations may not be executed).',
    table: {
      title: 'Schedule S1',
      headers: ['T1', 'T2'],
      rows: [
        ['lock-S(A)', ''],
        ['read(A)', ''],
        ['lock-S(B)', ''],
        ['read(B)', ''],
        ['', 'lock-S(A)'],
        ['', 'read(A)'],
        ['unlock(A)', ''],
        ['unlock(B)', ''],
        ['', 'lock-X(B)'],
        ['', 'read(B)'],
        ['', 'write(B)'],
        ['', 'unlock(A)'],
        ['', 'unlock(B)']
      ]
    },
    additionalTables: [
      {
        title: 'Schedule S2',
        headers: ['T1', 'T2'],
        rows: [
          ['lock-X(A)', ''],
          ['read(A)', ''],
          ['write(A)', ''],
          ['unlock(A)', ''],
          ['', 'lock-S(B)'],
          ['', 'read(B)'],
          ['', 'lock-S(A)'],
          ['', 'read(A)'],
          ['lock-S(B)', ''],
          ['read(B)', ''],
          ['unlock(B)', ''],
          ['', 'unlock(A)'],
          ['', 'unlock(B)']
        ]
      }
    ],
    options: [
      { id: 'a', text: 'Both S1 and S2 will suffer from deadlock.' },
      { id: 'b', text: 'S1 will suffer from deadlock, S2 will not suffer from deadlock.' },
      { id: 'c', text: 'S1 will not suffer from deadlock, S2 will suffer from deadlock.' },
      { id: 'd', text: 'Neither S1 nor S2 will suffer from deadlock.' }
    ],
    correctOptionId: 'd',
    correctOptionIds: ['d'],
    explanation: '• In S1: T1 and T2 both request shared locks on A (compatible). T2 requests lock-X(B) only AFTER T1 has unlocked B. All lock requests are immediately granted without waiting; no cycle exists.\n• In S2: T1 unlocks A before T2 requests lock-S(A). Later, both T1 and T2 request lock-S(B) (compatible). All locks are granted without deadlock.\nTherefore, neither S1 nor S2 suffers from deadlock.\nHence, option (d) is correct.'
  },
  {
    id: 69,
    assignment: 7,
    assignmentTitle: 'Assignment 7',
    topic: 'Recoverable, Cascadeless & Strict Schedules',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the following two schedules S1 and S2 involving transactions T1 and T2, where R(X) and W(X) denote read and write operations on X:\n\nWhich of the following statement(s) is/are false?',
    table: {
      title: 'Schedule S1',
      headers: ['T1', 'T2'],
      rows: [
        ['W(X)', ''],
        ['COMMIT', ''],
        ['', 'R(X)'],
        ['', 'COMMIT']
      ]
    },
    additionalTables: [
      {
        title: 'Schedule S2',
        headers: ['T1', 'T2'],
        rows: [
          ['W(X)', ''],
          ['', 'R(X)'],
          ['COMMIT', ''],
          ['', 'COMMIT']
        ]
      }
    ],
    options: [
      { id: 'a', text: 'Both S1 and S2 are Recoverable Schedules.' },
      { id: 'b', text: 'S1 is a Strict Schedule.' },
      { id: 'c', text: 'S2 is a Recoverable Schedule, but not a Cascadeless Schedule.' },
      { id: 'd', text: 'S1 is a Recoverable Schedule, whereas S2 is a Cascadeless Schedule.' }
    ],
    correctOptionId: 'd',
    correctOptionIds: ['d'],
    explanation: '• In S2: T2 reads X before T1 commits (dirty read), but T2 commits after T1 commits. Thus S2 is Recoverable, but NOT Cascadeless.\n• Therefore, statement (d) stating that "S2 is a Cascadeless Schedule" is FALSE.\nHence, option (d) is the answer.'
  },
  {
    id: 70,
    assignment: 7,
    assignmentTitle: 'Assignment 7',
    topic: 'View Serializability Dependencies',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the following schedule S, where R(X) and W(X) denote read and write operations by transaction Ti:\n\nIdentify the possible number of view serializable schedule of the above schedule S.',
    table: {
      title: 'Schedule S',
      headers: ['T1', 'T2', 'T3'],
      rows: [
        ['', '', 'R(X)'],
        ['', 'W(X)', ''],
        ['R(X)', '', ''],
        ['', '', 'W(X)'],
        ['W(X)', '', ''],
        ['W(Y)', '', '']
      ]
    },
    options: [
      { id: 'a', text: '1' },
      { id: 'b', text: '2' },
      { id: 'c', text: '3' },
      { id: 'd', text: '4' }
    ],
    correctOptionId: 'a',
    correctOptionIds: ['a'],
    explanation: 'Step 1: Final Update: T1 performs the final write on X and Y. So T1 must be the last transaction: (T2, T3) → T1.\nStep 2: Initial Read: T3 performs the initial read on X before T2 updates it. So T3 must precede T2: T3 → T2.\nStep 3: Read from Write: T1 reads the value written by T2. So T2 must precede T1: T2 → T1.\nCombining all three conditions yields the single valid serial order: T3 → T2 → T1.\nHence, total possible view serializable schedules = 1.\nHence, option (a) is correct.'
  },

  // ==================== ASSIGNMENT 8 (Questions 71 to 80) ====================
  {
    id: 71,
    assignment: 8,
    assignmentTitle: 'Assignment 8',
    topic: 'Immediate DB Modification & Checkpoint Recovery',
    questionType: 'MSQ',
    marks: 2,
    question: 'Assume an immediate database modification scheme. Consider the following log records for transactions T0, T1, T2, T3 and T4:\n\nIf there is a crash just after step 14 and the recovery of the system is successfully completed, identify the correct action for the above scenario.',
    table: {
      title: 'Log Records',
      headers: ['steps', 'Details of log'],
      rows: [
        ['1', '⟨T0, start⟩'],
        ['2', '⟨T0, A, 400, 600⟩'],
        ['3', '⟨T1, start⟩'],
        ['4', '⟨T1, B, 600, 900⟩'],
        ['5', '⟨T2, start⟩'],
        ['6', '⟨T0, commit⟩'],
        ['7', '⟨T2, C, 900, 1500⟩'],
        ['8', '⟨checkpoint {T1, T2}⟩'],
        ['9', '⟨T3, start⟩'],
        ['10', '⟨T2, commit⟩'],
        ['11', '⟨T3, D, 800, 900⟩'],
        ['12', '⟨T3, commit⟩'],
        ['13', '⟨T4, start⟩'],
        ['14', '⟨T4, E, 500, 1000⟩']
      ]
    },
    options: [
      { id: 'a', text: 'After recovery completion, value of B will be 600.' },
      { id: 'b', text: 'After recovery completion, value of C will be 1500.' },
      { id: 'c', text: 'After recovery completion, value of D will be 800.' },
      { id: 'd', text: 'After recovery completion, value of E will be 1000.' }
    ],
    correctOptionId: 'a, b',
    correctOptionIds: ['a', 'b'],
    explanation: '• T0 committed before the checkpoint, so no recovery action is needed.\n• T2 and T3 committed after the checkpoint: both have commit records in the log, so Redo list = {T2, T3}.\n• T1 and T4 did not commit before the crash: Undo list = {T1, T4}.\n• During Undo: T1 is undone -> B is restored to its old value 600 (option a is correct). T4 is undone -> E is restored to old value 500.\n• During Redo: T2 is redone -> C is set to its new value 1500 (option b is correct). T3 is redone -> D is set to new value 900.\nHence, options (a) and (b) are correct.'
  },
  {
    id: 72,
    assignment: 8,
    assignmentTitle: 'Assignment 8',
    topic: 'Immediate Modification Recovery Lists',
    questionType: 'MCQ',
    marks: 2,
    question: 'Assume an immediate database modification scheme. Consider the following log records for transactions T5, T6, T7, T8 and T9:\n\nIf there is a crash just after step 14 and the recovery of the system is successfully completed, identify the correct recovery action for the above scenario.',
    table: {
      title: 'Log Records',
      headers: ['steps', 'Details of log'],
      rows: [
        ['1', '⟨T5, start⟩'],
        ['2', '⟨T5, A, 150, 250⟩'],
        ['3', '⟨T6, start⟩'],
        ['4', '⟨T6, B, 250, 350⟩'],
        ['5', '⟨T5, commit⟩'],
        ['6', '⟨checkpoint {T6}⟩'],
        ['7', '⟨T6, commit⟩'],
        ['8', '⟨T7, start⟩'],
        ['9', '⟨T7, C, 350, 550⟩'],
        ['10', '⟨T8, start⟩'],
        ['11', '⟨T8, D, 700, 900⟩'],
        ['12', '⟨T8, commit⟩'],
        ['13', '⟨T9, start⟩'],
        ['14', '⟨T9, E, 900, 1100⟩']
      ]
    },
    options: [
      { id: 'a', text: 'No Action: T5; Redo: T7, T8; Undo: T6, T9' },
      { id: 'b', text: 'No Action: T6; Redo: T7, T8; Undo: T5, T9' },
      { id: 'c', text: 'No Action: T5; Redo: T7, T9; Undo: T6, T8' },
      { id: 'd', text: 'No Action: T5; Redo: T6, T8; Undo: T7, T9' }
    ],
    correctOptionId: 'd',
    correctOptionIds: ['d'],
    explanation: '• T5 committed before the checkpoint -> No Action: T5.\n• T6 committed after checkpoint, T8 started after checkpoint and committed -> Redo: {T6, T8}.\n• T7 and T9 were active without committing before crash -> Undo: {T7, T9}.\nTherefore: [ No Action: T5; Redo: T6, T8; Undo: T7, T9 ].\nHence, option (d) is the correct answer.'
  },
  {
    id: 73,
    assignment: 8,
    assignmentTitle: 'Assignment 8',
    topic: 'Query Evaluation Cost Estimation',
    questionType: 'MCQ',
    marks: 2,
    question: 'Identify the cost estimation of a query evaluation plan, if 8000 blocks are required to be transferred from the disk and the required number of disk seeks are 40.\n• Time to transfer one block: t_T = 5 milliseconds.\n• Time for one seek: t_S = 0.5 seconds.',
    options: [
      { id: 'a', text: '40 Seconds' },
      { id: 'b', text: '50 Seconds' },
      { id: 'c', text: '60 Seconds' },
      { id: 'd', text: '70 Seconds' }
    ],
    correctOptionId: 'c',
    correctOptionIds: ['c'],
    explanation: 'Total Cost = (b × t_T + S × t_S) seconds\n= (8000 × 5 × 10^-3) + (40 × 0.5) seconds\n= 40 + 20 = 60 Seconds.\nHence, option (c) is the answer.'
  },
  {
    id: 74,
    assignment: 8,
    assignmentTitle: 'Assignment 8',
    topic: 'Nested-Loop Join Block Transfers',
    questionType: 'MCQ',
    marks: 2,
    question: 'Let us consider the following statistics for two relations Vehicle and Service_Record:\n• Number of records of Vehicle: n_Vehicle = 5000.\n• Number of blocks of Vehicle: b_Vehicle = 50.\n• Number of records of Service_Record: n_Service_Record = 1000.\n• Number of blocks of Service_Record: b_Service_Record = 10.\n\nLet us consider a natural join of Vehicle and Service_Record relations (Vehicle ⨝ Service_Record). Identify the required number of block transfers in the worst case (enough memory only to hold one block of each relation) using Nested-loop join and assuming Vehicle as the outer relation.',
    options: [
      { id: 'a', text: '5000 block transfers' },
      { id: 'b', text: '50010 block transfers' },
      { id: 'c', text: '50050 block transfers' },
      { id: 'd', text: '60060 block transfers' }
    ],
    correctOptionId: 'c',
    correctOptionIds: ['c'],
    explanation: 'In the worst case for tuple-oriented nested loop join with outer relation R (Vehicle) and inner relation S (Service_Record):\nBlock transfers = n_R × b_S + b_R\n= 5000 × 10 + 50 = 50,000 + 50 = 50050 block transfers.\nHence, option (c) is correct.'
  },
  {
    id: 75,
    assignment: 8,
    assignmentTitle: 'Assignment 8',
    topic: 'Crash Recovery with Checkpoints (T1 to T6)',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the following state of transactions and the statements below:\n\n1. T1, T2 and T3 can be ignored.\n2. T2 and T4 can be ignored.\n3. T5, and T6 need to be redone.\n4. T5 and T6 need to be undone.\n5. Only T4 needs to be redone.\n\nIdentify the correct group of statements from the options below.',
    diagram: {
      type: 'asgn8-q5-checkpoint',
      caption: 'Transaction Execution State: Check Point 1, Check Point 2, System Failure'
    },
    options: [
      { id: 'a', text: '1), 2), 3), 5)' },
      { id: 'b', text: '1), 3), 4), 5)' },
      { id: 'c', text: '1), 4), 5)' },
      { id: 'd', text: '1), 2), 5)' }
    ],
    correctOptionId: 'c',
    correctOptionIds: ['c'],
    explanation: '• T1, T2, and T3 all committed before Check Point 2 (the last checkpoint): therefore, their updates are already flushed to disk and they can be ignored (Statement 1 is TRUE).\n• T4 committed after Check Point 2 before System Failure: therefore, only T4 needs to be redone (Statement 5 is TRUE).\n• T5 and T6 were still active/running at the time of System Failure: therefore, T5 and T6 need to be undone (Statement 4 is TRUE).\nThus, the correct statements are 1), 4), and 5).\nHence, option (c) is correct.'
  },
  {
    id: 76,
    assignment: 8,
    assignmentTitle: 'Assignment 8',
    topic: 'Query Optimization & Relational Algebra Trees',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the following relational schema:\nVehicle(vehicle_id, vehicle_name, model, owner_id)\nService_Record(service_id, vehicle_id, service_date, service_cost)\nOwner(owner_id, owner_name, address, phone)\n\nTwo query trees are given below:\n\nIdentify the correct statement for the above two query trees.',
    diagram: {
      type: 'asgn8-q6-trees',
      caption: 'Query Trees: Figure 1 (selection at top) vs Figure 2 (selection pushed down to Service_Record)'
    },
    options: [
      { id: 'a', text: 'Two query trees are equivalent and the query tree of Figure 1 will lead to more efficient query processing.' },
      { id: 'b', text: 'Two query trees are equivalent and the query tree of Figure 2 will lead to more efficient query processing.' },
      { id: 'c', text: 'Two query trees are equivalent as identical operations (irrespective of their positions) are used in both trees.' },
      { id: 'd', text: 'Two query trees are not equivalent as selection or projection operations cannot be carried out before or after the natural join operation.' }
    ],
    correctOptionId: 'b',
    correctOptionIds: ['b'],
    explanation: 'Both trees produce identical results (they are equivalent). In Figure 2, the selection σ_service_cost > 5000 is pushed down directly onto Service_Record before performing the natural joins. Pushing selections down reduces intermediate relation sizes early, significantly reducing the join cost.\nHence, option (b) is correct.'
  },
  {
    id: 77,
    assignment: 8,
    assignmentTitle: 'Assignment 8',
    topic: 'Equivalence of Relational Algebra Queries',
    questionType: 'MSQ',
    marks: 2,
    question: 'Consider the following relational schema:\nVehicle(vehicle_id, vehicle_name, model, owner_id)\nService_Record(service_id, vehicle_id, service_date, service_cost)\nOwner(owner_id, owner_name, address, phone)\n\nFour relational algebra queries are given below:\nQ1: σ_model=\'SUV\' (σ_service_cost>5000 (Vehicle ⨝ Service_Record ⨝ Owner))\nQ2: σ_model=\'SUV\' ∧ service_cost>5000 (Vehicle ⨝ Service_Record ⨝ Owner)\nQ3: Π_vehicle_name, owner_name (Vehicle ⨝ Service_Record ⨝ Owner)\nQ4: Π_vehicle_name, owner_name (Vehicle × Service_Record × Owner)\n\nIdentify the correct options from the options given below.',
    options: [
      { id: 'a', text: 'Q1 is equivalent to Q2.' },
      { id: 'b', text: 'Q1 is not equivalent to Q2.' },
      { id: 'c', text: 'Q3 is equivalent to Q4.' },
      { id: 'd', text: 'Q3 is not equivalent to Q4.' }
    ],
    correctOptionId: 'a, d',
    correctOptionIds: ['a', 'd'],
    explanation: '• Cascading selections: σ_C1(σ_C2(R)) = σ_(C1 ∧ C2)(R). Thus, Q1 is equivalent to Q2 (option a is correct).\n• Natural join ⨝ filters tuples based on matching common attributes (vehicle_id, owner_id), whereas Cartesian product × pairs every tuple regardless of keys. Thus Q3 and Q4 produce different results, meaning Q3 is not equivalent to Q4 (option d is correct).\nHence, options (a) and (d) are correct.'
  },
  {
    id: 78,
    assignment: 8,
    assignmentTitle: 'Assignment 8',
    topic: 'Recovery with Early Lock Release & Logical Undo',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the log record of Transaction T1 with one operation instance O1 used in a recovery system with early lock release, B+ tree based concurrency control.\n\nChoose the correct set of log entries for the recovery of transactions.',
    table: {
      title: 'Log Records',
      headers: ['Step', 'Operation'],
      rows: [
        ['1', '⟨T1, start⟩'],
        ['2', '⟨T1, X, 900, 800⟩'],
        ['3', '⟨T1, O1, operation-begin⟩'],
        ['4', '⟨T1, Y, 400, 700⟩'],
        ['5', '⟨T1, Z, 500, 900⟩'],
        ['6', '⟨T1, O1, operation-end, (Y, -300), (Z, -400)⟩'],
        ['7', 'crash or abort here']
      ]
    },
    options: [
      {
        id: 'a',
        text: '⟨T1, Z, 500, 900⟩\n⟨T1, Y, 400, 700⟩\n⟨T1, O1, operation-abort⟩\n⟨T1, X, 900⟩\n⟨T1, abort⟩'
      },
      {
        id: 'b',
        text: '⟨T1, Z, 500, 900⟩\n⟨T1, Y, 400, 700⟩\n⟨T1, O1, operation-abort⟩\n⟨T1, X, 800⟩\n⟨T1, abort⟩'
      },
      {
        id: 'c',
        text: '⟨T1, Z, 900, 500⟩\n⟨T1, Y, 700, 400⟩\n⟨T1, O1, operation-abort⟩\n⟨T1, X, 800⟩\n⟨T1, abort⟩'
      },
      {
        id: 'd',
        text: '⟨T1, Z, 900, 500⟩\n⟨T1, Y, 700, 400⟩\n⟨T1, O1, operation-abort⟩\n⟨T1, X, 900⟩\n⟨T1, abort⟩'
      }
    ],
    correctOptionId: 'd',
    correctOptionIds: ['d'],
    explanation: 'Scanning backward:\n1. Step 6: Operation O1 has operation-end with inverse updates (Y, -300) and (Z, -400). Compensation/undo log records are written in reverse order: ⟨T1, Z, 900, 500⟩, ⟨T1, Y, 700, 400⟩, followed by ⟨T1, O1, operation-abort⟩.\n2. Step 2: X was updated from 900 to 800. The undo restores the old value: ⟨T1, X, 900⟩.\n3. Step 1: Transaction abort is completed: ⟨T1, abort⟩.\nHence, option (d) is correct.'
  },
  {
    id: 79,
    assignment: 8,
    assignmentTitle: 'Assignment 8',
    topic: 'Relational Algebra Heuristic Optimization',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the following relational schema:\nArtifact(AID, Artifact_Name, Gallery_ID, Year_Acquired)\nGallery(Gallery_ID, Gallery_Name)\n\nConsider the following relational algebra expression:\nΠ_Artifact_Name (σ_Gallery_Name=\'Ancient\' ∧ Year_Acquired<1900 (Artifact ⨝_(Artifact.Gallery_ID = Gallery.Gallery_ID) Gallery))\n\nIdentify the most optimized relational algebra expression equivalent to the above relational algebra expression.',
    options: [
      { id: 'a', text: 'Π_Artifact_Name (σ_Year_Acquired<1900 (Artifact) ⨝_(Artifact.Gallery_ID = Gallery.Gallery_ID) σ_Gallery_Name=\'Ancient\' (Gallery))' },
      { id: 'b', text: 'Π_Artifact_Name (σ_Gallery_Name=\'Ancient\' (σ_Year_Acquired<1900 (Artifact ⨝_(Artifact.Gallery_ID = Gallery.Gallery_ID) Gallery)))' },
      { id: 'c', text: 'Π_Artifact_Name, Gallery_ID (σ_Year_Acquired<1900 ∧ Gallery_Name=\'Ancient\' (Artifact ⨝_(Artifact.Gallery_ID = Gallery.Gallery_ID) Gallery))' },
      { id: 'd', text: 'Π_Artifact_Name (Artifact ⨝_(Artifact.Gallery_ID = Gallery.Gallery_ID) σ_Year_Acquired<1900 ∧ Gallery_Name=\'Ancient\' (Gallery))' }
    ],
    correctOptionId: 'a',
    correctOptionIds: ['a'],
    explanation: 'By the heuristic optimization rules, selection conditions should be pushed down as close as possible to the individual relations:\n• σ_Year_Acquired<1900 applies only to attributes of Artifact, so it is pushed directly to Artifact.\n• σ_Gallery_Name=\'Ancient\' applies only to attributes of Gallery, so it is pushed directly to Gallery.\nThen join the reduced relations and project Artifact_Name.\nHence, option (a) is the most optimized expression.'
  },
  {
    id: 80,
    assignment: 8,
    assignmentTitle: 'Assignment 8',
    topic: 'Distributive Property of Theta-Join over Set Difference',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the following Relational Algebra expression:\n(R1 ⨝_θ R2) − (R1 ⨝_θ R3),\nwhere R1, R2, and R3 are relational algebra expressions and θ is the join condition.\n\nIdentify the correct equivalent Relational Algebra expression.',
    options: [
      { id: 'a', text: 'R1 ∩ (R2 ⨝_θ R3)' },
      { id: 'b', text: '(R1 ⨝_θ R2) − R3' },
      { id: 'c', text: 'R1 ⨝_θ (R2 − R3)' },
      { id: 'd', text: '(R1 ⨝_θ R2) ∩ (R1 ⨝_θ R3)' }
    ],
    correctOptionId: 'c',
    correctOptionIds: ['c'],
    explanation: 'By the distributive property of the θ-join operator over set difference:\nR1 ⨝_θ (R2 − R3) = (R1 ⨝_θ R2) − (R1 ⨝_θ R3).\nHence, option (c) is the correct equivalent Relational Algebra expression.'
  }
];
