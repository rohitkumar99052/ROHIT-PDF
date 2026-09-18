import { DbmsQuestion } from './dbmsTypes';

export const DBMS_ASSIGNMENT_5_6: DbmsQuestion[] = [
  // ==================== ASSIGNMENT 5 (Questions 41 to 50) ====================
  {
    id: 41,
    assignment: 5,
    assignmentTitle: 'Assignment 5',
    topic: 'URL Structure & Components',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the URL: https://onlinecourses.nptel.ac.in/e-learning/\n\nIdentify the correct statement(s) about it.',
    options: [
      { id: 'a', text: 'The first part ‘https’ is called the path name.' },
      { id: 'b', text: 'The second part ‘onlinecourses.nptel.ac.in’ is called the domain name.' },
      { id: 'c', text: 'The part ‘ac.in’ is called the sub-domain name.' },
      { id: 'd', text: 'The rest of the URL ‘/e-learning’ is called a Uniform Resource Identifier.' }
    ],
    correctOptionId: 'b',
    correctOptionIds: ['b'],
    explanation: 'In the URL structure:\n• https is the protocol scheme\n• onlinecourses.nptel.ac.in is the host / domain name\n• /e-learning is the path\nHence, statement (b) is correct.'
  },
  {
    id: 42,
    assignment: 5,
    assignmentTitle: 'Assignment 5',
    topic: 'Web Services Architecture (REST & XML)',
    questionType: 'MSQ',
    marks: 2,
    question: 'Identify the correct statement(s) from the following options.',
    options: [
      { id: 'a', text: 'REST is a type of Web Service.' },
      { id: 'b', text: 'REST and JSON cannot work together.' },
      { id: 'c', text: 'XML data format is traditionally associated with Big Web Services.' },
      { id: 'd', text: 'Data can not be accessed using remote procedure call mechanism on the Web.' }
    ],
    correctOptionId: 'a, c',
    correctOptionIds: ['a', 'c'],
    explanation: '• REST (Representational State Transfer) is a prominent architectural style for Web Services (statement a is true).\n• REST and JSON work together ubiquitously (statement b is false).\n• XML data format (SOAP/WSDL) is traditionally associated with Big Web Services (statement c is true).\n• Data can be accessed via RPC mechanisms (gRPC, XML-RPC) on the Web (statement d is false).\nHence, options (a) and (c) are correct.'
  },
  {
    id: 53, // Q43 in flow
    assignment: 5,
    assignmentTitle: 'Assignment 5',
    topic: 'Disk Controller & Storage Concepts',
    questionType: 'MSQ',
    marks: 2,
    question: 'Which of the following statement(s) is (are) incorrect?',
    options: [
      { id: 'a', text: 'Disk controller acts as an interface between the computer system and the disk drive hardware.' },
      { id: 'b', text: 'When a sector is found to be bad, the disk controller remaps the logical sector to a different physical sector.' },
      { id: 'c', text: 'Mean time to failure (MTTF) is the maximum time, when a disk can run continuously without any failure.' },
      { id: 'd', text: 'When a huge number of disks are connected by a high-speed network to a number of servers, it is called Network Area Storage.' }
    ],
    correctOptionId: 'c, d',
    correctOptionIds: ['c', 'd'],
    explanation: '• Statements (a) and (b) are standard correct facts about disk controllers.\n• Statement (c) is INCORRECT: MTTF is the AVERAGE time (expected value), not the maximum time.\n• Statement (d) is INCORRECT: When a huge number of disks are connected by a high-speed network to multiple servers, it is called a Storage Area Network (SAN), not Network Area Storage (NAS is Network Attached Storage).\nHence, options (c) and (d) are the incorrect statements.'
  },
  {
    id: 44,
    assignment: 5,
    assignmentTitle: 'Assignment 5',
    topic: 'Magnetic Disk Sector Size Calculation',
    questionType: 'MCQ',
    marks: 2,
    question: 'Suppose, there is a 512 gigabyte magnetic disk with 256 surfaces and 1024 tracks per surface. If it has 512 sectors in each track, what will be the size of one sector?',
    options: [
      { id: 'a', text: '512 bytes' },
      { id: 'b', text: '1 KB' },
      { id: 'c', text: '2 KB' },
      { id: 'd', text: '4 KB' }
    ],
    correctOptionId: 'd',
    correctOptionIds: ['d'],
    explanation: '• Disk Capacity = 512 GB = 512 × 2^30 bytes = 2^39 bytes.\n• Total sectors = (Surfaces) × (Tracks/Surface) × (Sectors/Track)\n  = 256 × 1024 × 512 = 2^8 × 2^10 × 2^9 = 2^27 sectors.\n• Sector Size = (Total Capacity) / (Total Sectors) = 2^39 / 2^27 = 2^12 bytes = 4096 bytes = 4 KB.\nHence, option (d) is correct.'
  },
  {
    id: 45,
    assignment: 5,
    assignmentTitle: 'Assignment 5',
    topic: 'RAID 1 Storage Capacity Calculation',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider A Redundant Arrays of Independent Disks system (RAID) of Level 1 uses 8 disks. The storage capacity of each disk is 2 Terabyte. Find the usable storage capacity.',
    options: [
      { id: 'a', text: '16 TB' },
      { id: 'b', text: '8 TB' },
      { id: 'c', text: '4 TB' },
      { id: 'd', text: '2 TB' }
    ],
    correctOptionId: 'b',
    correctOptionIds: ['b'],
    explanation: 'RAID Level 1 provides disk mirroring (1:1 redundancy). Half of the total storage capacity is dedicated to mirrors.\nUsable Capacity = (Number of disks × Capacity of one disk) / 2\n= (8 × 2 TB) / 2 = 8 TB.\nHence, option (b) is the answer.'
  },
  {
    id: 46,
    assignment: 5,
    assignmentTitle: 'Assignment 5',
    topic: 'System Availability (MTBF & MTTR)',
    questionType: 'MCQ',
    marks: 2,
    question: 'What will be the availability of the Redundant Arrays of Independent Disks (RAID) system, if the Mean Time Between Failure (MTBF) is 25 days and the Mean Time To Repair (MTTR) of the system is 20 hours?',
    options: [
      { id: 'a', text: '96.77%' },
      { id: 'b', text: '96.02%' },
      { id: 'c', text: '58.14%' },
      { id: 'd', text: '30.25%' }
    ],
    correctOptionId: 'a',
    correctOptionIds: ['a'],
    explanation: '• MTBF = 25 days = 25 × 24 = 600 hours.\n• MTTR = 20 hours.\n• Availability = MTBF / (MTBF + MTTR) = 600 / (600 + 20) = 600 / 620 ≈ 0.96774 = 96.77%.\nHence, option (a) is correct.'
  },
  {
    id: 47,
    assignment: 5,
    assignmentTitle: 'Assignment 5',
    topic: 'ER Relationship Cardinality & Constraints',
    questionType: 'MSQ',
    marks: 2,
    question: 'In a Drawing Competition, participants individually can enroll their names for the competition. There are many groups in the competition depending on the age of the participants. A participant can participate in only one group and a group can consist of multiple participants. Each group has a unique name (GName) and a participant also has a unique id. The result of each group will be maintained separately. Which of the following statement(s) are incorrect?',
    diagram: {
      type: 'asgn5-q7-er',
      caption: 'ER Diagram: Group (GName, AgeLimit) —[1]— <Participate (Result)> —[n]— Participant (PID, Name, Age)'
    },
    options: [
      { id: 'a', text: 'Entity Group will not have any primary key.' },
      { id: 'b', text: 'Participate will be a one-to-many relationship between Group and Participants.' },
      { id: 'c', text: 'Participate will be a many-to-many relationship between Group and Participant.' },
      { id: 'd', text: 'GName can be the foreign key of Participate relation between Group and Participant.' }
    ],
    correctOptionId: 'a, c',
    correctOptionIds: ['a', 'c'],
    explanation: '• Each group has a unique name (GName), so GName is the primary key of Group (thus statement a is incorrect).\n• A participant belongs to only 1 group, but a group has multiple participants. This is a 1-to-many relationship (thus statement c is incorrect).\nHence, the incorrect statements are (a) and (c).'
  },
  {
    id: 48,
    assignment: 5,
    assignmentTitle: 'Assignment 5',
    topic: 'Relational Schema Refinement',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider a relation DrawingCompetition(paintId, pNo, topic, pName, painter, year, materials)\nwith functional dependencies:\npaintId → pName, topic\npNo → painter, materials\npaintId, topic → year\n\nIf we perform a schema refinement on DrawingCompetition, which of the following set of relations will be in the refined schema?',
    options: [
      { id: 'a', text: 'Painter(pNo, painter, materials)\nDrawingCompetition(paintId, topic, pName, materials)\nDomain(topic, year)' },
      { id: 'b', text: 'Painter(pNo, painter, materials)\nDrawingCompetition(paintId, topic, pName, year)' },
      { id: 'c', text: 'Painter(pNo, painter, materials)\nDrawingCompetition(paintId, pName, year)\nDomain(topic, year)' },
      { id: 'd', text: 'Painter(pNo, painter, materials)\nDrawingCompetition(paintId, pNo, topic, pName, year)' }
    ],
    correctOptionId: 'd',
    correctOptionIds: ['d'],
    explanation: 'In options (a), (b), and (c), there is no common attribute (like pNo) connecting Painter and DrawingCompetition to enable a lossless natural join back to the original table. Option (d) retains pNo in DrawingCompetition as a foreign key.\nHence, option (d) is the answer.'
  },
  {
    id: 49,
    assignment: 5,
    assignmentTitle: 'Assignment 5',
    topic: 'LRU Buffer Replacement Simulation',
    questionType: 'MCQ',
    marks: 2,
    question: 'An operating system uses the Least Recently Used (LRU) strategy for replacing its buffer. Suppose, the system allocates 3 free main memory buffer blocks for the execution of a query. If the query requires the following disk blocks to access to complete its execution:\n12, 9, 17, 9, 3, 9, 12, 17, 11, 3, 9, 3, 4, 17\n\nWhat will be the image of those 3 buffer blocks after servicing the disk block ‘11’?',
    table: {
      title: 'LRU Buffer Execution Trace',
      headers: ['Access Step', 'Requirement Details', 'Buffer Block 1', 'Buffer Block 2', 'Buffer Block 3'],
      rows: [
        ['1', '12 - miss, placed in empty block', '12', '-', '-'],
        ['2', '9 - miss, placed in empty block', '12', '9', '-'],
        ['3', '17 - miss, placed in empty block', '12', '9', '17'],
        ['4', '9 - hit, no replacement', '12', '9', '17'],
        ['5', '3 - miss, 12 least recently used -> replaced by 3', '3', '9', '17'],
        ['6', '9 - hit, no replacement', '3', '9', '17'],
        ['7', '12 - miss, 17 least recently used -> replaced by 12', '3', '9', '12'],
        ['8', '17 - miss, 3 least recently used -> replaced by 17', '17', '9', '12'],
        ['9', '11 - miss, 9 least recently used -> replaced by 11', '17', '11', '12']
      ]
    },
    options: [
      { id: 'a', text: '12  9  11' },
      { id: 'b', text: '17  9  11' },
      { id: 'c', text: '11  9  12' },
      { id: 'd', text: '17  11  12' }
    ],
    correctOptionId: 'd',
    correctOptionIds: ['d'],
    explanation: 'Tracing step-by-step through block access 11:\n• Before 11, the buffer holds [17, 9, 12] with recent access order (most to least): 17, 12, 9.\n• Since 9 is least recently used among the three, 11 replaces 9.\n• The resulting buffer content is: 17, 11, 12.\nHence, option (d) is correct.'
  },
  {
    id: 50,
    assignment: 5,
    assignmentTitle: 'Assignment 5',
    topic: 'Sequential File Blocking Factor',
    questionType: 'MCQ',
    marks: 2,
    question: 'Suppose, there is a sequential file for the relation Building with the following description:\n• Assume record size is fixed.\n• Records do not cross block boundaries.\n\nIf the size of one record is 30 bytes, the size of one disk block is 512 bytes and the block pointer size is 18 bytes long. What is the maximum number of records can be stored in one block?',
    options: [
      { id: 'a', text: '14' },
      { id: 'b', text: '16' },
      { id: 'c', text: '17' },
      { id: 'd', text: '18' }
    ],
    correctOptionId: 'b',
    correctOptionIds: ['b'],
    explanation: '• Available space to store records in each block = Block Size − Block Pointer Size = 512 − 18 = 494 bytes.\n• Record size = 30 bytes (unspanned, records cannot cross boundaries).\n• Maximum records per block = ⌊494 / 30⌋ = 16 records (16 × 30 = 480 bytes; 14 bytes remain unused).\nHence, option (b) is correct.'
  },

  // ==================== ASSIGNMENT 6 (Questions 51 to 60) ====================
  {
    id: 51,
    assignment: 6,
    assignmentTitle: 'Assignment 6',
    topic: 'Index Types (Secondary Index)',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider a relation Smartphone(IMEI, model, manufacturer), contains 1,00,000 smartphone records sorted by IMEI. However, users frequently search for a smartphone by its model. What type of index should be created?',
    options: [
      { id: 'a', text: 'Primary indexing' },
      { id: 'b', text: 'Secondary indexing' },
      { id: 'c', text: 'Clustering indexing' },
      { id: 'd', text: 'Multilevel indexing' }
    ],
    correctOptionId: 'b',
    correctOptionIds: ['b'],
    explanation: 'The physical data file is already sorted by IMEI. The attribute model is a non-ordering (and non-key) attribute. An index created on a non-ordering field of a file is defined as a Secondary Index.\nHence, option (b) is correct.'
  },
  {
    id: 52,
    assignment: 6,
    assignmentTitle: 'Assignment 6',
    topic: 'B+ Tree vs B-Tree Properties',
    questionType: 'MSQ',
    marks: 2,
    question: 'Identify the correct statement(s) for a B+ Tree and B-Tree.',
    options: [
      { id: 'a', text: 'In B+ Tree keys and records are stored in both internal nodes and leaf nodes.' },
      { id: 'b', text: 'In B-Tree keys are stored in internal nodes and data are stored only in the leaf nodes.' },
      { id: 'c', text: 'Sequential access is faster in the B+ Tree as the leaf nodes are linked.' },
      { id: 'd', text: 'Sequential access is slower in the B-Tree as the leaf nodes are not linked.' }
    ],
    correctOptionId: 'c, d',
    correctOptionIds: ['c', 'd'],
    explanation: '• In a B-Tree, keys and data pointers reside in all nodes (internal and leaf), and leaves are not linked, making sequential access slower (option d is true).\n• In a B+ Tree, internal nodes store only routing keys, all records/data are in leaf nodes, and all leaf nodes form a linked list, making sequential range scans very fast (option c is true).\nHence, options (c) and (d) are correct.'
  },
  {
    id: 53,
    assignment: 6,
    assignmentTitle: 'Assignment 6',
    topic: 'Sparse Index Entries Calculation',
    questionType: 'MCQ',
    marks: 2,
    question: 'A database file contains 12,000 records stored in sorted order. Each disk block can store 50 records. If a sparse index has two entries per data block, how many index entries are needed?',
    options: [
      { id: 'a', text: '50' },
      { id: 'b', text: '240' },
      { id: 'c', text: '480' },
      { id: 'd', text: '12000' }
    ],
    correctOptionId: 'c',
    correctOptionIds: ['c'],
    explanation: '1. Number of data blocks = 12,000 / 50 = 240 blocks.\n2. Since the sparse index has 2 entries per data block, total index entries = 240 × 2 = 480 entries.\nHence, option (c) is correct.'
  },
  {
    id: 54,
    assignment: 6,
    assignmentTitle: 'Assignment 6',
    topic: '2-3-4 Tree Key Insertion',
    questionType: 'MCQ',
    marks: 2,
    question: 'Insert the following keys into an empty 2-3-4 tree:\n11, 24, 31, 38, 45, 51, 52, 59, 66, 73\n\nHow many 3-nodes (node with 2 keys) will be in the final tree?',
    diagram: {
      type: 'asgn6-q4-tree',
      caption: 'Final 2-3-4 Tree: Root [38], internal children [24] and [51 59], leaves [11], [31], [45], [52], [66 73]'
    },
    options: [
      { id: 'a', text: '3' },
      { id: 'b', text: '2' },
      { id: 'c', text: '1' },
      { id: 'd', text: '0' }
    ],
    correctOptionId: 'b',
    correctOptionIds: ['b'],
    explanation: 'In the resulting 2-3-4 tree after all insertions:\n• Root node: [38] (2-node, 1 key)\n• Child 1: [24] (2-node, 1 key)\n• Child 2: [51, 59] (3-node, 2 keys)\n• Leaves: [11] (2-node), [31] (2-node), [45] (2-node), [52] (2-node), [66, 73] (3-node, 2 keys)\nThere are exactly two 3-nodes: [51, 59] and [66, 73].\nHence, option (b) is correct.'
  },
  {
    id: 55,
    assignment: 6,
    assignmentTitle: 'Assignment 6',
    topic: 'Dense Index and Data File Block Calculation',
    questionType: 'MCQ',
    marks: 2,
    question: 'Suppose that one block in a disk can store either 6 records or 15 key pointers. If a database contains 1200 records, how many total number of blocks do we need to store the data file and the index file?',
    options: [
      { id: 'a', text: '280' },
      { id: 'b', text: '260' },
      { id: 'c', text: '200' },
      { id: 'd', text: '90' }
    ],
    correctOptionId: 'a',
    correctOptionIds: ['a'],
    explanation: '• Data file blocks = 1200 records / 6 records per block = 200 blocks.\n• Dense index file (1 entry per record) = 1200 entries / 15 pointers per block = 80 blocks.\n• Total blocks needed = 200 + 80 = 280 blocks.\nHence, option (a) is correct.'
  },
  {
    id: 56,
    assignment: 6,
    assignmentTitle: 'Assignment 6',
    topic: '2-3-4 Tree Search Key Comparisons',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the following 2-3-4 tree in which each data item is a character.\n\nHow many comparisons will be required to find ‘M’ in the above tree?',
    diagram: {
      type: 'asgn6-q6-tree',
      caption: '2-3-4 Tree: Root [J], Children [C] and [N T], Leaves [A], [E G H], [K L], [P], [U Y]'
    },
    options: [
      { id: 'a', text: '2' },
      { id: 'b', text: '3' },
      { id: 'c', text: '4' },
      { id: 'd', text: '5' }
    ],
    correctOptionId: 'c',
    correctOptionIds: ['c'],
    explanation: 'Tracing search for \'M\':\n1. Compare with root [J]: M > J (1 comparison) -> go to right child [N, T].\n2. Compare with N: M < N (2nd comparison) -> go to left child of N, which is node [K, L].\n3. Compare with K: M > K (3rd comparison).\n4. Compare with L: M > L (4th comparison) -> since this is a leaf and M > L, search terminates as NOT FOUND.\nTotal comparisons = 4.\nHence, option (c) is correct.'
  },
  {
    id: 57,
    assignment: 6,
    assignmentTitle: 'Assignment 6',
    topic: 'Hashing Bucket Calculation',
    questionType: 'MCQ',
    marks: 2,
    question: 'A database file is indexed with hashing with bucket size 100 and the hash function H(key) = (key ÷ 11) % 100. Compute the location, where the key k = 21375 will be placed.',
    options: [
      { id: 'a', text: '19' },
      { id: 'b', text: '43' },
      { id: 'c', text: '75' },
      { id: 'd', text: '94' }
    ],
    correctOptionId: 'b',
    correctOptionIds: ['b'],
    explanation: '• Integer division: 21375 ÷ 11 = 1943.\n• Modulo 100: 1943 % 100 = 43.\n• The key will be placed at bucket location 43.\nHence, option (b) is correct.'
  },
  {
    id: 58,
    assignment: 6,
    assignmentTitle: 'Assignment 6',
    topic: 'Bitmap Index Sizing',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider there is a relational table Product(pID, pName, type, price). There is a bitmap index file on type of the Product. The size of the index file is 1 KB. If there are 512 rows in the Product table, how many different types of Products are there?',
    options: [
      { id: 'a', text: '4' },
      { id: 'b', text: '8' },
      { id: 'c', text: '16' },
      { id: 'd', text: '32' }
    ],
    correctOptionId: 'c',
    correctOptionIds: ['c'],
    explanation: 'For a table with N rows and m distinct column values, the bitmap index consists of m bitmaps of N bits each (Total bits = N × m).\n• Total size = 1 KB = 1024 bytes = 1024 × 8 bits = 8192 bits.\n• Number of rows N = 512.\n• m = 8192 / 512 = 16 distinct product types.\nHence, option (c) is correct.'
  },
  {
    id: 59,
    assignment: 6,
    assignmentTitle: 'Assignment 6',
    topic: 'B+ Tree Internal Node Minimum Block Size',
    questionType: 'MCQ',
    marks: 2,
    question: 'The order of an internal node in a B+ tree index is the maximum number of children it can have. Suppose that a child pointer takes 8 bytes, the search key field value takes 10 bytes, and the order of internal node is 57. Identify the minimum block size.',
    options: [
      { id: 'a', text: '512 bytes' },
      { id: 'b', text: '1024 bytes' },
      { id: 'c', text: '2048 bytes' },
      { id: 'd', text: '4096 bytes' }
    ],
    correctOptionId: 'b',
    correctOptionIds: ['b'],
    explanation: '• Order m = 57 child pointers -> (m - 1) = 56 search keys.\n• Block Size ≥ (m × Pointer Size) + ((m - 1) × Key Size)\n  = (57 × 8) + (56 × 10) = 456 + 560 = 1016 bytes.\n• Standard disk block sizes are powers of 2. The smallest standard block size that can accommodate 1016 bytes is 1024 bytes (1 KB).\nHence, option (b) is correct.'
  },
  {
    id: 60,
    assignment: 6,
    assignmentTitle: 'Assignment 6',
    topic: 'Bitmap Index Evaluation',
    questionType: 'MSQ',
    marks: 2,
    question: 'Consider the following Customer relation and the bitmap index for Age, with A1, A2, A3, and A4 representing the bitmaps for Age intervals.\n\nChoose the incorrect option(s) based on the above.',
    table: {
      title: 'Customer',
      headers: ['CustID', 'CustomerName', 'city', 'Age'],
      rows: [
        ['245649325', 'Anurav', 'Kolkata', 25],
        ['408473932', 'Rangeet', 'Mumbai', 18],
        ['33344575', 'Shreya', 'Kolkata', 47],
        ['122987554', 'Abir', 'New Delhi', 42],
        ['759447011', 'Swagata', 'Mumbai', 53],
        ['524564932', 'Satyait', 'Pune', 20],
        ['458473921', 'Ramesh', 'Hyderabad', 37],
        ['320044575', 'Avinash', 'Kolkata', 30],
        ['202987554', 'Rajan', 'Pune', 24],
        ['775947011', 'Avinash', 'New Delhi', 55]
      ]
    },
    additionalTables: [
      {
        title: 'Bitmap Intervals (A1, A2, A3, A4)',
        headers: ['Bitmap', 'Tuple 1', 'Tuple 2', 'Tuple 3', 'Tuple 4', 'Tuple 5', 'Tuple 6', 'Tuple 7', 'Tuple 8', 'Tuple 9', 'Tuple 10'],
        rows: [
          ['A1', '1', '1', '0', '1', '0', '1', '1', '1', '1', '0'],
          ['A2', '0', '0', '1', '0', '1', '0', '0', '0', '0', '1'],
          ['A3', '1', '0', '1', '1', '0', '0', '1', '1', '0', '0'],
          ['A4', '0', '0', '1', '1', '1', '0', '1', '1', '0', '1']
        ]
      }
    ],
    options: [
      { id: 'a', text: 'A1 is a bitmap index for Age below 40.' },
      { id: 'b', text: 'A2 is a bitmap index for Age 40 to below 60.' },
      { id: 'c', text: 'A3 is a bitmap index for Age 25 to below 50.' },
      { id: 'd', text: 'A4 is a bitmap index for Age 30 and above.' }
    ],
    correctOptionId: 'a, b',
    correctOptionIds: ['a', 'b'],
    explanation: '• For Tuple 4 (Abir, Age 42): A1 has bit 1, but 42 is NOT below 40. Thus A1 is NOT a bitmap for Age < 40 (Statement a is incorrect).\n• For Tuple 4 (Age 42): A2 has bit 0, but 42 is in [40, 60). Thus A2 is NOT a bitmap for Age 40 to below 60 (Statement b is incorrect).\n• Statements (c) and (d) match correctly.\nHence, options (a) and (b) are the incorrect statements.'
  }
];
