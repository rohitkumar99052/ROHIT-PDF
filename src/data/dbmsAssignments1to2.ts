import { DbmsQuestion } from './dbmsTypes';

export const DBMS_ASSIGNMENT_1_2: DbmsQuestion[] = [
  // ==================== ASSIGNMENT 1 (Questions 1 to 10) ====================
  {
    id: 1,
    assignment: 1,
    assignmentTitle: 'Assignment 1',
    topic: 'Levels of Data Abstraction',
    questionType: 'MCQ',
    marks: 2,
    question: 'Which level of abstraction describes types of data that are stored in the Database?',
    options: [
      { id: 'a', text: 'Physical level' },
      { id: 'b', text: 'Logical level' },
      { id: 'c', text: 'View level' },
      { id: 'd', text: 'Abstraction level' }
    ],
    correctOptionId: 'b',
    correctOptionIds: ['b'],
    explanation: 'We have three levels of abstraction:\n• Physical level: Lowest level; describes how data is physically stored in the database.\n• Logical level: Middle level of 3-level architecture; describes what/which type of data is stored in the database.\n• View level: Highest level; describes user interaction with the database system.\nHence, option (b) is correct.'
  },
  {
    id: 2,
    assignment: 1,
    assignmentTitle: 'Assignment 1',
    topic: 'Primary Key Identification',
    questionType: 'MCQ',
    marks: 2,
    question: 'Identify the valid primary key for the relation course_registration from the given instance.',
    table: {
      title: 'course_registration',
      headers: ['student_id', 'course_id', 'semester', 'grade'],
      rows: [
        ['101', 'CS101', '1', 'A'],
        ['102', 'CS101', '1', 'B'],
        ['101', 'MA101', '1', 'A'],
        ['103', 'CS101', '2', 'B'],
        ['102', 'MA101', '1', 'A']
      ]
    },
    options: [
      { id: 'a', text: 'student_id' },
      { id: 'b', text: 'course_id' },
      { id: 'c', text: 'student_id, course_id' },
      { id: 'd', text: 'semester' }
    ],
    correctOptionId: 'c',
    correctOptionIds: ['c'],
    explanation: 'A primary key must uniquely identify each record in a table. In the given instance, neither student_id nor course_id alone is unique. The composite key (student_id, course_id) uniquely identifies each tuple in the relation.\nHence, option (c) is correct.'
  },
  {
    id: 3,
    assignment: 1,
    assignmentTitle: 'Assignment 1',
    topic: 'Instance vs Schema',
    questionType: 'MCQ',
    marks: 2,
    question: 'Identify the correct statement/s.',
    options: [
      { id: 'a', text: 'Employee(empID, empName) is an instance of a relation schema.' },
      { id: 'b', text: 'Employee(empID, empName) is an example of a physical schema.' },
      { id: 'c', text: '(5012, Ananya) is an instance of a relation schema.' },
      { id: 'd', text: '(5012, Ananya) is an example of a logical schema.' }
    ],
    correctOptionId: 'c',
    correctOptionIds: ['c'],
    explanation: '(5012, Ananya) is an instance (tuple/data) of the schema Employee(empID, empName). Employee(empID, empName) is a logical relation schema, not an instance.\nHence, option (c) is correct.'
  },
  {
    id: 4,
    assignment: 1,
    assignmentTitle: 'Assignment 1',
    topic: 'Candidate Keys and Superkeys',
    questionType: 'MSQ',
    marks: 2,
    question: 'Consider a relation BookStore(ISBN, Title, Price, Category) where the superkeys are as follows:\n{ISBN}, {ISBN, Title}, {Price, Category}, {Price, Category, Title}.\nSelect the possible candidate key(s).',
    options: [
      { id: 'a', text: '{ISBN}' },
      { id: 'b', text: '{Price}' },
      { id: 'c', text: '{Category}' },
      { id: 'd', text: '{Price, Category}' }
    ],
    correctOptionId: 'a, d',
    correctOptionIds: ['a', 'd'],
    explanation: 'Minimal superkeys are candidate keys. Here, {ISBN} alone is a superkey and minimal, so {ISBN} is a candidate key. Similarly, {Price, Category} is a superkey and removing any attribute makes it not a superkey, so {Price, Category} is minimal and also a candidate key.\nHence, options (a) and (d) are correct.'
  },
  {
    id: 5,
    assignment: 1,
    assignmentTitle: 'Assignment 1',
    topic: 'Relational Algebra Interpretation',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the following relations:\nArticle(AID, Title, Citations)\nArticleTag(AID, Tag)\n\nWhat does the following relational algebra expression represent?\nΠ_AID ((σ_Citations > 50 (Article)) ⨝ (σ_Tag = \'AI\' (ArticleTag)))',
    options: [
      { id: 'a', text: 'Find the AID of all Article with more than 50 Citations.' },
      { id: 'b', text: 'Find the AID of all Article with more than 50 Citations or are of Tag ‘AI’.' },
      { id: 'c', text: 'Find the AID of all Article with more than 50 Citations but are not of Tag ‘AI’.' },
      { id: 'd', text: 'Find the AID of all Article with more than 50 Citations and are of Tag ‘AI’.' }
    ],
    correctOptionId: 'd',
    correctOptionIds: ['d'],
    explanation: 'The selection conditions are applied on both relations, then a natural join is performed on AID, and finally projection on AID is taken. Hence, only articles satisfying both conditions (Citations > 50 AND Tag = \'AI\') are returned.\nTherefore, option (d) is correct.'
  },
  {
    id: 6,
    assignment: 1,
    assignmentTitle: 'Assignment 1',
    topic: 'SQL DDL vs DML',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the following SQL statement(s):\nS1:\nINSERT INTO orders(order_id, customer_id, order_date)\nVALUES (501, 2001, ‘2026-06-10’);\n\nS2:\nALTER TABLE orders ADD COLUMN total_amount number(10, 2);\n\nIdentify the correct statement.',
    options: [
      { id: 'a', text: 'Both S1 and S2 are Data Manipulation (DML) Queries' },
      { id: 'b', text: 'S1 is a Data Manipulation (DML) Query, and S2 is a Data Definition (DDL) Query' },
      { id: 'c', text: 'Both S1 and S2 are Data Definition (DDL) Queries' },
      { id: 'd', text: 'S1 is a Data Control Query, and S2 is a Data Definition (DDL) Query' }
    ],
    correctOptionId: 'b',
    correctOptionIds: ['b'],
    explanation: 'INSERT INTO is a DML (Data Manipulation Language) command that alters data. ALTER TABLE is a DDL (Data Definition Language) command that alters the table structure/schema.\nHence, option (b) is correct.'
  },
  {
    id: 7,
    assignment: 1,
    assignmentTitle: 'Assignment 1',
    topic: 'Foreign Key Constraint Validation',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the following instance of the Department(DeptID, DeptName) relation:\n\nIf DeptID is the foreign key in the relational schema EmployeeAllocation(AllocationID, DeptID, EmployeeName), which of the following is a valid instance of EmployeeAllocation?',
    table: {
      title: 'Department',
      headers: ['DeptID', 'DeptName'],
      rows: [
        ['D101', 'Computer Science'],
        ['D102', 'Electronics']
      ]
    },
    options: [
      {
        id: 'a',
        text: 'Option A: AllocationID: [A001, A002], DeptID: [D101, D105], EmployeeName: [Amit, Raj]',
        table: {
          title: 'Instance (a)',
          headers: ['AllocationID', 'DeptID', 'EmployeeName'],
          rows: [
            ['A001', 'D101', 'Amit'],
            ['A002', 'D105', 'Raj']
          ]
        }
      },
      {
        id: 'b',
        text: 'Option B: AllocationID: [A001, A001], DeptID: [D101, D102], EmployeeName: [Amit, Raj]',
        table: {
          title: 'Instance (b)',
          headers: ['AllocationID', 'DeptID', 'EmployeeName'],
          rows: [
            ['A001', 'D101', 'Amit'],
            ['A001', 'D102', 'Raj']
          ]
        }
      },
      {
        id: 'c',
        text: 'Option C: AllocationID: [NULL, A003], DeptID: [D102, D102], EmployeeName: [Amit, Raj]',
        table: {
          title: 'Instance (c)',
          headers: ['AllocationID', 'DeptID', 'EmployeeName'],
          rows: [
            ['NULL', 'D102', 'Amit'],
            ['A003', 'D102', 'Raj']
          ]
        }
      },
      {
        id: 'd',
        text: 'Option D: AllocationID: [A001, A002], DeptID: [D101, D102], EmployeeName: [Amit, Raj]',
        table: {
          title: 'Instance (d)',
          headers: ['AllocationID', 'DeptID', 'EmployeeName'],
          rows: [
            ['A001', 'D101', 'Amit'],
            ['A002', 'D102', 'Raj']
          ]
        }
      }
    ],
    correctOptionId: 'd',
    correctOptionIds: ['d'],
    explanation: '• Option (a) is invalid because DeptID "D105" does not exist in Department (referential integrity violation).\n• Option (b) is invalid because AllocationID cannot have duplicate values (violates PK).\n• Option (c) is invalid because Primary Key cannot be NULL.\n• Option (d) satisfies all constraints.\nHence, option (d) is correct.'
  },
  {
    id: 8,
    assignment: 1,
    assignmentTitle: 'Assignment 1',
    topic: 'Relational Algebra Selection Operator',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the following table RegionStats:\n\nIdentify the correct operation(s) that produce the following output from the above relation:',
    table: {
      title: 'RegionStats',
      headers: ['RegionName', 'Population', 'Country'],
      rows: [
        ['Texas', 70000, 'USA'],
        ['California', 80000, 'USA'],
        ['Ontario', 50000, 'Canada'],
        ['Quebec', 45000, 'Canada'],
        ['Bavaria', 30000, 'Germany'],
        ['Florida', 60000, 'USA']
      ]
    },
    additionalTables: [
      {
        title: 'Desired Output Relation',
        headers: ['RegionName', 'Population', 'Country'],
        rows: [
          ['Texas', 70000, 'USA'],
          ['California', 80000, 'USA'],
          ['Ontario', 50000, 'Canada'],
          ['Florida', 60000, 'USA']
        ]
      }
    ],
    options: [
      { id: 'a', text: 'σ_Population ≥ 50000 (RegionStats)' },
      { id: 'b', text: 'σ_Population > 60000 (RegionStats)' },
      { id: 'c', text: 'σ_Population ≥ 50000 ∧ Country = \'Canada\' (RegionStats)' },
      { id: 'd', text: 'σ_Population ≥ 80000 (RegionStats)' }
    ],
    correctOptionId: 'a',
    correctOptionIds: ['a'],
    explanation: 'The output table contains Texas (70000), California (80000), Ontario (50000), and Florida (60000). All these tuples satisfy Population >= 50000.\nHence, option (a) is the correct answer.'
  },
  {
    id: 9,
    assignment: 1,
    assignmentTitle: 'Assignment 1',
    topic: 'Relational Set Operations (Intersection)',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the following tables RegionStats1 and RegionStats2:\n\nIdentify the correct operation(s) which produce the following output from the above two relations:',
    table: {
      title: 'RegionStats1',
      headers: ['RegionName', 'Population', 'Country'],
      rows: [
        ['Texas', 70000, 'USA'],
        ['California', 80000, 'USA'],
        ['Ontario', 50000, 'Canada'],
        ['Quebec', 45000, 'Canada']
      ]
    },
    additionalTables: [
      {
        title: 'RegionStats2',
        headers: ['RegionName', 'Population', 'Country'],
        rows: [
          ['Texas', 70000, 'USA'],
          ['Bavaria', 30000, 'Germany'],
          ['Ontario', 50000, 'Canada'],
          ['Florida', 60000, 'USA']
        ]
      },
      {
        title: 'Desired Output',
        headers: ['RegionName', 'Population', 'Country'],
        rows: [
          ['Texas', 70000, 'USA'],
          ['Ontario', 50000, 'Canada']
        ]
      }
    ],
    options: [
      { id: 'a', text: 'RegionStats1 − RegionStats2' },
      { id: 'b', text: 'RegionStats1 ∩ RegionStats2' },
      { id: 'c', text: 'RegionStats2 − RegionStats1' },
      { id: 'd', text: 'RegionStats1 ∪ RegionStats2' }
    ],
    correctOptionId: 'b',
    correctOptionIds: ['b'],
    explanation: 'The output consists of tuples common to both RegionStats1 and RegionStats2 (Texas and Ontario). This is the set intersection RegionStats1 ∩ RegionStats2.\nHence, option (b) is correct.'
  },
  {
    id: 10,
    assignment: 1,
    assignmentTitle: 'Assignment 1',
    topic: 'Selection and Projection Composition',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the following table RegionStats:\n\nIdentify the correct operation(s) that produce the following output from the above relation:',
    table: {
      title: 'RegionStats',
      headers: ['RegionName', 'Population', 'Country'],
      rows: [
        ['Texas', 70000, 'USA'],
        ['California', 80000, 'USA'],
        ['Ontario', 50000, 'Canada'],
        ['Quebec', 45000, 'Canada'],
        ['Bavaria', 30000, 'Germany'],
        ['Florida', 60000, 'USA']
      ]
    },
    additionalTables: [
      {
        title: 'FilteredRegionStats',
        headers: ['RegionName', 'Country'],
        rows: [
          ['Texas', 'USA'],
          ['California', 'USA'],
          ['Ontario', 'Canada'],
          ['Florida', 'USA']
        ]
      }
    ],
    options: [
      { id: 'a', text: 'Π_RegionName, Country (RegionStats)' },
      { id: 'b', text: 'σ_Population ≥ 50000 (RegionStats)' },
      { id: 'c', text: 'Π_RegionName, Country (σ_Population ≥ 50000 (RegionStats))' },
      { id: 'd', text: 'σ_RegionName, Country (RegionStats)' }
    ],
    correctOptionId: 'c',
    correctOptionIds: ['c'],
    explanation: 'First, σ_Population >= 50000 filters out Quebec and Bavaria. Next, Π_RegionName, Country projects only the RegionName and Country columns, discarding Population.\nHence, option (c) is correct.'
  },

  // ==================== ASSIGNMENT 2 (Questions 11 to 20) ====================
  {
    id: 11,
    assignment: 2,
    assignmentTitle: 'Assignment 2',
    topic: 'SQL UPDATE Statement',
    questionType: 'MCQ',
    marks: 2,
    question: 'In an e-commerce system, the instance of CustomerOrders is as follows:\n\nFor the given instance, the ItemCount values need to be updated by decreasing 1 for those entries where the current values are greater than 2. What is the correct SQL query for updating the current instance?',
    table: {
      title: 'CustomerOrders',
      headers: ['OrderID', 'CustomerID', 'ItemCount'],
      rows: [
        ['O101', 'C001', 3],
        ['O102', 'C002', 2],
        ['O103', 'C003', 5],
        ['O104', 'C004', 1],
        ['O105', 'C005', 4]
      ]
    },
    options: [
      { id: 'a', text: 'MODIFY CustomerOrders ItemCount=ItemCount-1 WHERE ItemCount>2;' },
      { id: 'b', text: 'UPDATE CustomerOrders SET ItemCount=ItemCount-1 WHERE ItemCount>2;' },
      { id: 'c', text: 'UPDATE CustomerOrders ItemCount=ItemCount-1 WHERE ItemCount>2;' },
      { id: 'd', text: 'ALTER CustomerOrders SET ItemCount=ItemCount-1 WHERE ItemCount>2;' }
    ],
    correctOptionId: 'b',
    correctOptionIds: ['b'],
    explanation: 'To update data values, SQL syntax is:\nUPDATE table_name\nSET column_name = new_value\nWHERE condition;\nHence, option (b) is correct.'
  },
  {
    id: 12,
    assignment: 2,
    assignmentTitle: 'Assignment 2',
    topic: 'SQL CREATE TABLE & Primary Key Choice',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the following instance of table:\n\nIdentify the correct CREATE statement for this table.',
    table: {
      title: 'EmployeeDetails',
      headers: ['EmpName', 'DeptName', 'City', 'Salary'],
      rows: [
        ['Amit', 'HR', 'Kolkata', 60000],
        ['Amit', 'Sales', 'Kolkata', 60000],
        ['Riya', 'HR', 'Delhi', 50000],
        ['Riya', 'Finance', 'Delhi', 50000],
        ['Sourav', 'Sales', 'Kolkata', 70000]
      ]
    },
    options: [
      { id: 'a', text: 'CREATE TABLE EmployeeDetails (EmpName varchar(255) NOT NULL, DeptName varchar(255) NOT NULL, City varchar(255), Salary int, PRIMARY KEY (EmpName));' },
      { id: 'b', text: 'CREATE TABLE EmployeeDetails (EmpName varchar(255) NOT NULL, DeptName varchar(255) NOT NULL, City varchar(255), Salary int, PRIMARY KEY (EmpName, DeptName));' },
      { id: 'c', text: 'CREATE TABLE EmployeeDetails (EmpName varchar(255), DeptName varchar(255) NOT NULL, City varchar(255), Salary int, PRIMARY KEY (DeptName));' },
      { id: 'd', text: 'CREATE TABLE EmployeeDetails (EmpName varchar(255) NOT NULL, DeptName varchar(255) NOT NULL, City varchar(255), Salary int, PRIMARY KEY (EmpName, City));' }
    ],
    correctOptionId: 'b',
    correctOptionIds: ['b'],
    explanation: 'EmpName has duplicates ("Amit", "Riya"). DeptName has duplicates ("HR", "Sales"). The pair (EmpName, City) has duplicate ("Amit", "Kolkata"). Only the composite pair (EmpName, DeptName) is completely unique across all rows. Therefore, PRIMARY KEY (EmpName, DeptName) is correct.\nHence, option (b) is correct.'
  },
  {
    id: 13,
    assignment: 2,
    assignmentTitle: 'Assignment 2',
    topic: 'SQL GROUP BY & Aggregation',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the following two tables representing a book store system:\n\nWhat is the output of the following SQL query?\nSELECT Category, SUM(Quantity)\nFROM SalesRecords, BookCatalog\nWHERE SalesRecords.BookID = BookCatalog.BookID\nGROUP BY Category;',
    table: {
      title: 'SalesRecords',
      headers: ['SaleID', 'BookID', 'Quantity'],
      rows: [
        ['S101', 'B001', 5],
        ['S102', 'B003', 2],
        ['S103', 'B002', 7],
        ['S104', 'B001', 1]
      ]
    },
    additionalTables: [
      {
        title: 'BookCatalog',
        headers: ['BookID', 'Category'],
        rows: [
          ['B001', 'Fiction'],
          ['B002', 'Science'],
          ['B003', 'Fiction']
        ]
      }
    ],
    options: [
      { id: 'a', text: 'Fiction: 8, Science: 7' },
      { id: 'b', text: 'Fiction: 6, Science: 7' },
      { id: 'c', text: 'Fiction: 9, Science: 7' },
      { id: 'd', text: 'Fiction: 8, Science: 6' }
    ],
    correctOptionId: 'a',
    correctOptionIds: ['a'],
    explanation: 'Join on BookID:\n• B001 (Fiction): S101 (5) + S104 (1) = 6\n• B003 (Fiction): S102 (2) -> Total Fiction = 6 + 2 = 8\n• B002 (Science): S103 (7) -> Total Science = 7\nOutput: Fiction: 8, Science: 7.\nHence, option (a) is correct.'
  },
  {
    id: 14,
    assignment: 2,
    assignmentTitle: 'Assignment 2',
    topic: 'SQL CREATE VIEW Syntax',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the following instance InventoryDetails of an e-commerce application:\n\nIdentify the correct statement to create a VIEW on the InventoryDetails table to retrieve Name and Price of all products in the Electronics category, and name the view as Electronics_Products:',
    table: {
      title: 'InventoryDetails',
      headers: ['ProductID', 'Name', 'Price', 'Category'],
      rows: [
        ['P001', 'Laptop', 50000, 'Electronics'],
        ['P002', 'Mobile', 20000, 'Electronics'],
        ['P003', 'Shoes', 3000, 'Footwear'],
        ['P004', 'Watch', 1500, 'Accessories'],
        ['P005', 'Shirt', 800, 'Clothing']
      ]
    },
    options: [
      { id: 'a', text: 'Create Electronics_Products AS SELECT Name, Price FROM InventoryDetails WHERE Category = ‘Electronics’;' },
      { id: 'b', text: 'Create view Electronics_Products ON InventoryDetails SELECT Name, Price WHERE Category = ‘Electronics’;' },
      { id: 'c', text: 'Create view Electronics_Products TO InventoryDetails SELECT Name, Price WHERE Category = ‘Electronics’;' },
      { id: 'd', text: 'Create view Electronics_Products AS SELECT Name, Price FROM InventoryDetails WHERE Category = ‘Electronics’;' }
    ],
    correctOptionId: 'd',
    correctOptionIds: ['d'],
    explanation: 'The standard SQL syntax for creating a view is:\nCREATE VIEW view_name AS\nSELECT col1, col2 FROM table_name WHERE condition;\nHence, option (d) is correct.'
  },
  {
    id: 15,
    assignment: 2,
    assignmentTitle: 'Assignment 2',
    topic: 'SQL Pattern Matching (LIKE)',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the following table for a ride-sharing application:\n\nWhich of the following options will be present in the output generated by the SQL query:\nSELECT Location\nFROM CabDriverInfo\nWHERE Location LIKE ‘B%’ AND Location LIKE ‘%e’;',
    table: {
      title: 'CabDriverInfo',
      headers: ['DriverID', 'Location'],
      rows: [
        ['D001', 'Bangalore'],
        ['D002', 'Hyderabad'],
        ['D003', 'Chennai'],
        ['D004', 'Pune'],
        ['D005', 'Bhopal'],
        ['D006', 'Delhi']
      ]
    },
    options: [
      { id: 'a', text: 'Bhopal' },
      { id: 'b', text: 'Pune' },
      { id: 'c', text: 'Hyderabad' },
      { id: 'd', text: 'Bangalore' }
    ],
    correctOptionId: 'd',
    correctOptionIds: ['d'],
    explanation: '• LIKE \'B%\' filters strings starting with \'B\': "Bangalore", "Bhopal".\n• LIKE \'%e\' filters strings ending with \'e\': "Bangalore", "Pune".\n• The conjunction AND requires both: only "Bangalore" starts with B and ends with e.\nHence, option (d) is correct.'
  },
  {
    id: 16,
    assignment: 2,
    assignmentTitle: 'Assignment 2',
    topic: 'Relational Natural Join',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the two instances PurchaseRecords and InventoryCatalog:\n\nWhich of the following relational algebra operations will generate the following output?',
    table: {
      title: 'PurchaseRecords',
      headers: ['OrderID', 'ProductID', 'Quantity'],
      rows: [
        ['O001', 'P001', 10],
        ['O002', 'P002', 5],
        ['O003', 'P003', 8],
        ['O004', 'P002', 3]
      ]
    },
    additionalTables: [
      {
        title: 'InventoryCatalog',
        headers: ['ProductID', 'ProductName'],
        rows: [
          ['P001', 'Laptop'],
          ['P002', 'Mouse'],
          ['P003', 'Keyboard']
        ]
      },
      {
        title: 'Desired Output',
        headers: ['OrderID', 'ProductID', 'Quantity', 'ProductName'],
        rows: [
          ['O001', 'P001', 10, 'Laptop'],
          ['O002', 'P002', 5, 'Mouse'],
          ['O003', 'P003', 8, 'Keyboard'],
          ['O004', 'P002', 3, 'Mouse']
        ]
      }
    ],
    options: [
      { id: 'a', text: 'PurchaseRecords NATURAL JOIN InventoryCatalog' },
      { id: 'b', text: 'PurchaseRecords LEFT OUTER JOIN InventoryCatalog' },
      { id: 'c', text: 'PurchaseRecords RIGHT OUTER JOIN InventoryCatalog' },
      { id: 'd', text: 'PurchaseRecords EQUI JOIN InventoryCatalog ON PurchaseRecords.ProductID = InventoryCatalog.ProductID' }
    ],
    correctOptionId: 'a',
    correctOptionIds: ['a'],
    explanation: 'A NATURAL JOIN combines tuples using identical attribute names (ProductID) and retains only a single copy of ProductID without qualification.\nHence, option (a) is correct.'
  },
  {
    id: 17,
    assignment: 2,
    assignmentTitle: 'Assignment 2',
    topic: 'SQL WHERE Clauses (OR Condition)',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the following instance of EmployeeDetails(EmpName, DeptName, City, Salary) relation.\n\nIdentify the correct statement(s) to get the following output:',
    table: {
      title: 'EmployeeDetails',
      headers: ['EmpName', 'DeptName', 'City', 'Salary'],
      rows: [
        ['Amit', 'HR', 'Kolkata', 60000],
        ['Riya', 'HR', 'Delhi', 50000],
        ['Sourav', 'Sales', 'Kolkata', 70000],
        ['Neha', 'Sales', 'Mumbai', 45000],
        ['Rahul', 'Finance', 'Chennai', 40000],
        ['Puja', 'Admin', 'Bangalore', 60000]
      ]
    },
    additionalTables: [
      {
        title: 'Desired Output',
        headers: ['EmpName', 'DeptName', 'City', 'Salary'],
        rows: [
          ['Amit', 'HR', 'Kolkata', 60000],
          ['Sourav', 'Sales', 'Kolkata', 70000],
          ['Neha', 'Sales', 'Mumbai', 45000],
          ['Puja', 'Admin', 'Bangalore', 60000]
        ]
      }
    ],
    options: [
      { id: 'a', text: 'SELECT * FROM EmployeeDetails WHERE Salary >= 60000;' },
      { id: 'b', text: 'SELECT * FROM EmployeeDetails WHERE DeptName = ‘Sales’;' },
      { id: 'c', text: 'SELECT * FROM EmployeeDetails WHERE Salary >= 60000 AND DeptName = ‘Sales’;' },
      { id: 'd', text: 'SELECT * FROM EmployeeDetails WHERE Salary >= 60000 OR DeptName = ‘Sales’;' }
    ],
    correctOptionId: 'd',
    correctOptionIds: ['d'],
    explanation: 'The output contains employees with Salary >= 60000 (Amit: 60000, Sourav: 70000, Puja: 60000) PLUS Neha (45000, but DeptName = \'Sales\'). This is an OR condition.\nHence, option (d) is correct.'
  },
  {
    id: 18,
    assignment: 2,
    assignmentTitle: 'Assignment 2',
    topic: 'SQL Aggregate Function AVG()',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the following instance of EmployeeDetails(EmpName, DeptName, City, Salary) relation.\n\nIdentify the correct SQL command to find the average salary of employees in the HR department.',
    table: {
      title: 'EmployeeDetails',
      headers: ['EmpName', 'DeptName', 'City', 'Salary'],
      rows: [
        ['Amit', 'HR', 'Kolkata', 60000],
        ['Riya', 'HR', 'Delhi', 50000],
        ['Sourav', 'Sales', 'Kolkata', 70000],
        ['Neha', 'Sales', 'Mumbai', 45000],
        ['Rahul', 'Finance', 'Chennai', 40000],
        ['Puja', 'Admin', 'Bangalore', 60000]
      ]
    },
    options: [
      { id: 'a', text: 'SELECT avg(Salary) FROM EmployeeDetails;' },
      { id: 'b', text: 'SELECT * FROM EmployeeDetails WHERE DeptName = ‘HR’ AND avg(Salary);' },
      { id: 'c', text: 'SELECT * FROM EmployeeDetails WHERE DeptName = ‘HR’ OR avg(Salary);' },
      { id: 'd', text: 'SELECT avg(Salary) FROM EmployeeDetails WHERE DeptName = ‘HR’;' }
    ],
    correctOptionId: 'd',
    correctOptionIds: ['d'],
    explanation: 'To compute the average salary for HR employees only, the WHERE clause filters DeptName = \'HR\' and SELECT avg(Salary) calculates the average.\nHence, option (d) is correct.'
  },
  {
    id: 19,
    assignment: 2,
    assignmentTitle: 'Assignment 2',
    topic: 'SQL Subqueries (ALL Operator)',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the following instance of EmployeeDetails(EmpName, DeptName, City, Salary) relation.\n\nIdentify the correct statement(s) to find the EmpName and City whose Salary is greater than the salary of all employees in the ‘HR’ department.',
    table: {
      title: 'EmployeeDetails',
      headers: ['EmpName', 'DeptName', 'City', 'Salary'],
      rows: [
        ['Amit', 'HR', 'Kolkata', 60000],
        ['Riya', 'HR', 'Delhi', 50000],
        ['Sourav', 'Sales', 'Kolkata', 70000],
        ['Neha', 'Sales', 'Mumbai', 45000],
        ['Rahul', 'Finance', 'Chennai', 40000],
        ['Puja', 'Admin', 'Bangalore', 60000]
      ]
    },
    options: [
      { id: 'a', text: 'SELECT EmpName, City FROM EmployeeDetails WHERE Salary > (SELECT Salary FROM EmployeeDetails WHERE DeptName = ‘HR’);' },
      { id: 'b', text: 'SELECT EmpName, City FROM EmployeeDetails WHERE Salary > ALL (SELECT Salary FROM EmployeeDetails WHERE DeptName = ‘HR’);' },
      { id: 'c', text: 'SELECT EmpName, City FROM EmployeeDetails WHERE Salary > ANY (SELECT Salary FROM EmployeeDetails WHERE DeptName = ‘HR’);' },
      { id: 'd', text: 'SELECT EmpName, City FROM EmployeeDetails WHERE Salary >= ALL (SELECT Salary FROM EmployeeDetails WHERE DeptName = ‘HR’);' }
    ],
    correctOptionId: 'b',
    correctOptionIds: ['b'],
    explanation: 'The subquery returns multiple HR salaries (60000, 50000). To be greater than all of them, the > ALL operator must be used.\nHence, option (b) is correct.'
  },
  {
    id: 20,
    assignment: 2,
    assignmentTitle: 'Assignment 2',
    topic: 'SQL CREATE INDEX Syntax',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the following instance of table EmployeeDetails:\n\nThe database administrator frequently executes queries that search employees based on their department name.\n\nIdentify the correct SQL statement to create an index named idx_dept on the DeptName attribute of the EmployeeDetails table.',
    table: {
      title: 'EmployeeDetails',
      headers: ['EmpName', 'DeptName', 'City', 'Salary'],
      rows: [
        ['Amit', 'HR', 'Kolkata', 60000],
        ['Riya', 'HR', 'Delhi', 50000],
        ['Sourav', 'Sales', 'Kolkata', 70000],
        ['Neha', 'Sales', 'Mumbai', 45000],
        ['Rahul', 'Finance', 'Chennai', 40000],
        ['Puja', 'Admin', 'Bangalore', 60000]
      ]
    },
    options: [
      { id: 'a', text: 'CREATE INDEX idx_dept ON EmployeeDetails(DeptName);' },
      { id: 'b', text: 'CREATE INDEX idx_dept FROM EmployeeDetails(DeptName);' },
      { id: 'c', text: 'CREATE TABLE idx_dept ON EmployeeDetails(DeptName);' },
      { id: 'd', text: 'CREATE INDEX EmployeeDetails ON idx_dept(DeptName);' }
    ],
    correctOptionId: 'a',
    correctOptionIds: ['a'],
    explanation: 'Standard SQL syntax to create an index is:\nCREATE INDEX index_name ON table_name(column_name);\nHence, option (a) is correct.'
  }
];
