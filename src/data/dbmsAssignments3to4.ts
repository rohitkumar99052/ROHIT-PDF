import { DbmsQuestion } from './dbmsTypes';

export const DBMS_ASSIGNMENT_3_4: DbmsQuestion[] = [
  // ==================== ASSIGNMENT 3 (Questions 21 to 30) ====================
  {
    id: 21,
    assignment: 3,
    assignmentTitle: 'Assignment 3',
    topic: 'Relational Division & Union',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the following instance of a relation Uniform:\n\nHow many tuples will be returned by the following Relational Algebra Query?\n((σ_School=\'KidSys\' ∨ Color=\'Blue\' (Uniform)) ÷ Π_Color (σ_Color=\'Blue\' (Uniform))) ∪ Π_School (σ_Color=\'White\' (Uniform))',
    table: {
      title: 'Uniform',
      headers: ['School', 'Color'],
      rows: [
        ['EduSys', 'Red'],
        ['APL', 'Green'],
        ['KidSys', 'Green'],
        ['GlobalEd', 'Blue'],
        ['LPInternational', 'Blue'],
        ['EduSys', 'White']
      ]
    },
    options: [
      { id: 'a', text: '4' },
      { id: 'b', text: '3' },
      { id: 'c', text: '2' },
      { id: 'd', text: '1' }
    ],
    correctOptionId: 'b',
    correctOptionIds: ['b'],
    explanation: '• The division ((σ_School=\'KidSys\' ∨ Color=\'Blue\' Uniform) ÷ Π_Color(σ_Color=\'Blue\' Uniform)) produces schools having blue uniform: GlobalEd and LPInternational (2 tuples).\n• Π_School(σ_Color=\'White\' Uniform) produces {EduSys} (1 tuple).\n• Taking union gives {GlobalEd, LPInternational, EduSys}, which is 3 tuples.\nHence, option (b) is correct.'
  },
  {
    id: 22,
    assignment: 3,
    assignmentTitle: 'Assignment 3',
    topic: 'ER to Relational Schema Mapping',
    questionType: 'MCQ',
    marks: 2,
    question: 'In a company, a Handicraft is made by multiple Artisans and an Artisan makes multiple Handicrafts. The Handicrafts are identified by their unique Tags. A Handicraft is made of a particular Material and is multi-colored. An Artisan has a unique ID. Assuming there is a Creates relation between Handicraft and Artisan, what will be the correct schema for Creates and Handicraft?',
    options: [
      { id: 'a', text: 'Creates(Tag, ID)\nHandicraft(Tag, Material, Color)' },
      { id: 'b', text: 'Creates(ID)\nHandicraft(Tag, Material)\nHandicraft_color(Tag, Color)' },
      { id: 'c', text: 'Creates(Tag, ID, Color)\nHandicraft(Tag, Material)' },
      { id: 'd', text: 'Creates(Tag, ID)\nHandicraft(Tag, Material)\nHandicraft_color(Tag, Color)' }
    ],
    correctOptionId: 'd',
    correctOptionIds: ['d'],
    explanation: 'In a many-to-many relationship, Creates must contain primary keys of both entities: (Tag, ID). Since Color is multivalued, 1NF requires a separate table Handicraft_color(Tag, Color). Handicraft table has (Tag, Material).\nHence, option (d) is correct.'
  },
  {
    id: 23,
    assignment: 3,
    assignmentTitle: 'Assignment 3',
    topic: 'ER Specialization & Relational Attributes',
    questionType: 'MSQ',
    marks: 2,
    question: 'Consider the following Entity Relationship Diagram:\n\nIf n[Contact] is the number of attributes present in the relational schema of Contact, n[Personal] is the number of attributes present in the relational schema of Personal and n[Professional] is the number of attributes present in the relational schema of Professional, which of the following options can NOT be true?',
    diagram: {
      type: 'asgn3-q3-er',
      caption: 'ER Diagram: Contact (Name, Number), User (ID, UName) with Maintains relationship and Specialization to Personal & Professional'
    },
    options: [
      { id: 'a', text: 'n[Contact] = 2' },
      { id: 'b', text: 'n[Personal] = 1' },
      { id: 'c', text: 'n[Professional] = 1' },
      { id: 'd', text: 'n[Professional] = 3' }
    ],
    correctOptionId: 'b, c',
    correctOptionIds: ['b', 'c'],
    explanation: 'The relational schema can be designed in two standard methods:\nMethod 1: Contact(Name, Number), Personal(Number, Social_site), Professional(Number, Email) -> n[Personal]=2, n[Professional]=2.\nMethod 2: Contact(Name, Number), Personal(Name, Number, Social_site), Professional(Name, Number, Email) -> n[Personal]=3, n[Professional]=3.\nThus, neither n[Personal] nor n[Professional] can ever be 1 (they must at least contain the identifying key attribute plus specific attribute).\nHence, options (b) and (c) can NOT be true.'
  },
  {
    id: 24,
    assignment: 3,
    assignmentTitle: 'Assignment 3',
    topic: 'Weak Entity & Total Participation in ER',
    questionType: 'MSQ',
    marks: 2,
    question: 'Consider the following Entity Relationship Diagram:\n\nWhich of the following options is (are) true?',
    diagram: {
      type: 'asgn3-q4-er',
      caption: 'ER Diagram: Windows (Weak Entity), Room, Occupant with Room_Win and Room_Occ'
    },
    options: [
      { id: 'a', text: 'Participation of Occupant is total is Room_Occ.' },
      { id: 'b', text: 'The primary key in the relational schema for Windows will be {Count, GlassType}.' },
      { id: 'c', text: 'The primary key in the relational schema for Room_Occ will be {RNo, OID}.' },
      { id: 'd', text: 'Participation of Room is partial is Room_Occ.' }
    ],
    correctOptionId: 'c, d',
    correctOptionIds: ['c', 'd'],
    explanation: '• Room_Occ is a many-to-many relationship without total participation line on Room, so participation of Room is partial in Room_Occ (option d is true).\n• The primary key of Room_Occ relation is the combination of primary keys of Room and Occupant: {RNo, OID} (option c is true).\n• For Windows (weak entity), the primary key includes the parent entity PK: {RNo, GlassType}, not {Count, GlassType}.\nHence, options (c) and (d) are correct.'
  },
  {
    id: 25,
    assignment: 3,
    assignmentTitle: 'Assignment 3',
    topic: 'Tuple Relational Calculus (TRC)',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the relation Singer(SID, Genres, Experience, discography).\nWhat is the Tuple Relational Calculus expression equivalent to the statement:\n“Select those Singer IDs (SID) whose Experiences are more than 20 years”?',
    options: [
      { id: 'a', text: '{ <t> | ∃ p, t ∈ Singer (t[Genres] = p[Genres] ∨ p[Experience] = 20) }' },
      { id: 'b', text: '{ <t> | ∃ p, t ∈ Singer (t[SID] = p[SID] ∨ p[Experience] > 20) }' },
      { id: 'c', text: '{ t | ∃ p ∈ Singer (t[Experience] = p[Experience] ∧ p[Singer] > 20) }' },
      { id: 'd', text: '{ t | ∃ p ∈ Singer (t[SID] = p[SID] ∧ p[Experience] > 20) }' }
    ],
    correctOptionId: 'd',
    correctOptionIds: ['d'],
    explanation: 'In Tuple Relational Calculus, to project SID where Experience > 20, tuple t has attribute SID equal to that of tuple p in Singer where p[Experience] > 20:\n{ t | ∃ p ∈ Singer (t[SID] = p[SID] ∧ p[Experience] > 20) }.\nHence, option (d) is correct.'
  },
  {
    id: 26,
    assignment: 3,
    assignmentTitle: 'Assignment 3',
    topic: 'ER Specialization Hierarchy & Inheritance',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the Entity Relationship diagram:\n\nWhich of the following statement(s) is/are TRUE?',
    diagram: {
      type: 'asgn3-q6-er',
      caption: 'ER Hierarchy: ANIMALS -> OMNIVORES, CARNIVORES, HERBIVORES; CARNIVORES -> DOGS'
    },
    options: [
      { id: 'a', text: 'DOGS inherit the attributes of CARNIVORES but not of ANIMALS.' },
      { id: 'b', text: 'DOGS inherit the attributes of CARNIVORES and ANIMALS.' },
      { id: 'c', text: 'CARNIVORES inherit the attributes of DOGS.' },
      { id: 'd', text: 'ANIMALS inherit the attributes of CARNIVORES, OMNIVORES, HERBIVORES and DOGS.' }
    ],
    correctOptionId: 'b',
    correctOptionIds: ['b'],
    explanation: 'By the property of inheritance in specialization hierarchies, a lower-level subclass (DOGS) inherits all attributes of its direct superclass (CARNIVORES) and all higher superclasses (ANIMALS).\nHence, option (b) is TRUE.'
  },
  {
    id: 27,
    assignment: 3,
    assignmentTitle: 'Assignment 3',
    topic: 'Domain Relational Calculus to Relational Algebra',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider relation R = (A, B).\nIdentify the correct relational-algebra expression equivalent to the following domain-relational-calculus expression:\n{ < a > | ∃ b ( < a, b > ∈ r ∧ b = 15 ) }',
    options: [
      { id: 'a', text: 'Π_A ( σ_B=15 (r) )' },
      { id: 'b', text: 'Π_B=15 (r)' },
      { id: 'c', text: 'σ_B=15 (r)' },
      { id: 'd', text: 'Π_A,B ( σ_A=15 (r) )' }
    ],
    correctOptionId: 'a',
    correctOptionIds: ['a'],
    explanation: '• ∃ b (<a, b> ∈ r ∧ b = 15) selects tuples where attribute B has value 15 (σ_B=15(r)).\n• < a > indicates projection on attribute A (Π_A).\nThus, equivalent RA is Π_A (σ_B=15(r)).\nHence, option (a) is correct.'
  },
  {
    id: 28,
    assignment: 3,
    assignmentTitle: 'Assignment 3',
    topic: 'SQL Database Triggers',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the following relations shown below:\n• Presentation(P_no, Presenter, Time)\n• Schedule(Topic, P_no)\n\nChoose the correct options based on the following SQL query:\nCREATE TRIGGER delete_trigger AFTER DELETE ON Presentation\nREFERENCING OLD ROW AS old_row\nFOR EACH ROW\nBEGIN\n  DELETE FROM Schedule\n  WHERE Schedule.Topic NOT IN\n    (SELECT Topic FROM Schedule WHERE P_no <> old_row.P_no)\nEND;',
    options: [
      { id: 'a', text: 'It is a trigger which is executed automatically upon deletion of a Presenter from Presentation relation and results in the deletion of the records from the Schedule relation.' },
      { id: 'b', text: 'It is a trigger which is executed automatically upon deletion of a Topic from Schedule relation and results in the deletion of the records from the Presentation relation.' },
      { id: 'c', text: 'It is a trigger which is executed automatically upon deletion of a Topic from Schedule relation only if P_no of Schedule relation does not present in the Presentation relation.' },
      { id: 'd', text: 'It is a trigger which is executed automatically upon deletion of a Presenter from Presentation relation only if P_no of Presentation relation does not present in the Schedule relation.' }
    ],
    correctOptionId: 'a',
    correctOptionIds: ['a'],
    explanation: 'The trigger is created "AFTER DELETE ON Presentation". Thus it executes automatically upon deletion of a row from Presentation, and inside its body executes "DELETE FROM Schedule...".\nHence, option (a) is correct.'
  },
  {
    id: 29,
    assignment: 3,
    assignmentTitle: 'Assignment 3',
    topic: 'Embedded SQL Cursor & Host Variables',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the relation GROCERY(ITEM, PRICE, MONTH).\nSelect the SQL query within a host language, to find those ITEMS whose PRICE has exceeded the price stored in monthly_budget in a specific MONTH defined in target_month. monthly_budget and target_month are declared in host language.',
    options: [
      { id: 'a', text: 'EXEC SQL\nDECLARE c CURSOR FOR\nSELECT ITEM FROM GROCERY\nWHERE PRICE > monthly_budget AND MONTH = target_month\nEND_EXEC' },
      { id: 'b', text: 'EXEC SQL\nDECLARE c CURSOR FOR\nSELECT ITEM FROM GROCERY\nWHERE PRICE > monthly_budget AND MONTH = :target_month\nEND_EXEC' },
      { id: 'c', text: 'EXEC SQL\nDECLARE c CURSOR FOR\nSELECT ITEM FROM GROCERY\nWHERE PRICE > :monthly_budget\nEND_EXEC' },
      { id: 'd', text: 'EXEC SQL\nDECLARE c CURSOR FOR\nSELECT ITEM FROM GROCERY\nWHERE PRICE > :monthly_budget AND MONTH = :target_month\nEND_EXEC' }
    ],
    correctOptionId: 'd',
    correctOptionIds: ['d'],
    explanation: 'In Embedded SQL, variables declared in the host language (C/Java/etc.) must be prefixed with a colon (:) when referenced inside SQL statements. Both monthly_budget and target_month need the colon prefix (:monthly_budget, :target_month).\nHence, option (d) is correct.'
  },
  {
    id: 30,
    assignment: 3,
    assignmentTitle: 'Assignment 3',
    topic: 'Relational Algebra Query Evaluation',
    questionType: 'MSQ',
    marks: 2,
    question: 'Consider the following instance of the relation Concerts:\n\nWhich of the following CNames are produced by the Relational Algebra expression given below?\nΠ_CName (σ_HallNo>2 ∧ Genres=\'Folk\' (Concerts)) ∩ Π_CName (σ_Event=\'Recorded\' (Concerts))',
    table: {
      title: 'Concerts',
      headers: ['CName', 'TheatrID', 'HallNo', 'Event', 'Genres', 'Showtime', 'ShowDay'],
      rows: [
        ['Bob Dylan', 'HASHTAG', 3, 'Recorded', 'Rock', 12, 'Monday'],
        ['The Miliputs', 'KCC', 4, 'Recorded', 'Folk', 15, 'Wednsday'],
        ['Bitkel asor', 'EZCC', 1, 'Live', 'Rock', 17, 'Wednesday'],
        ['Pancham', 'EZCC', 2, 'Live', 'Bollywood', 16, 'Thursday'],
        ['Pancham', 'HASHTAG', 3, 'Recorded', 'Folk', 13, 'Friday']
      ]
    },
    options: [
      { id: 'a', text: 'Bob Dylan' },
      { id: 'b', text: 'The Miliputs' },
      { id: 'c', text: 'Bitkel asor' },
      { id: 'd', text: 'Pancham' }
    ],
    correctOptionId: 'b, d',
    correctOptionIds: ['b', 'd'],
    explanation: '• σ_HallNo>2 ∧ Genres=\'Folk\' produces:\n  - The Miliputs (Hall 4, Folk)\n  - Pancham (Hall 3, Folk)\n• σ_Event=\'Recorded\' produces:\n  - Bob Dylan, The Miliputs, Pancham\n• Intersection of CNames produces: {The Miliputs, Pancham}.\nHence, options (b) and (d) are correct.'
  },

  // ==================== ASSIGNMENT 4 (Questions 31 to 40) ====================
  {
    id: 31,
    assignment: 4,
    assignmentTitle: 'Assignment 4',
    topic: 'Armstrong\'s Axioms (Augmentation)',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the relation VirtualConf(ConfID, ConfLink, Participants, Admin, Subject) with the following dependencies:\nConfID → Subject\n{Admin, Subject} → Participants\n\nAccording to which of the following rules, {ConfID, ConfLink} → Subject holds?',
    options: [
      { id: 'a', text: 'Augmentation' },
      { id: 'b', text: 'Decomposition' },
      { id: 'c', text: 'Transitivity' },
      { id: 'd', text: 'Pseudo-transitivity' }
    ],
    correctOptionId: 'a',
    correctOptionIds: ['a'],
    explanation: 'According to the Augmentation rule of Armstrong\'s axioms, if X → Y holds, then XZ → YZ holds for any attribute set Z. By decomposition, XZ → Y also holds. Adding ConfLink to both sides of ConfID → Subject gives {ConfID, ConfLink} → Subject.\nHence, option (a) is correct.'
  },
  {
    id: 32,
    assignment: 4,
    assignmentTitle: 'Assignment 4',
    topic: 'Functional Dependencies from Relation Instance',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the following instance of Market relation:\n\nWhich of the following functional dependencies hold on Market?',
    table: {
      title: 'Market',
      headers: ['MarketName', 'Product', 'Stock'],
      rows: [
        ['SpendWise', 'Shampoo', 12],
        ['SpendWise', 'Spicemix', 6],
        ['SpendWise', 'Cookies', 6],
        ['ShopLuck', 'Shampoo', 20],
        ['MarkIt', 'Cakemix', 60],
        ['MarkIt', 'Chocolate', 12]
      ]
    },
    options: [
      { id: 'a', text: 'MarketName → {Product, Stock}' },
      { id: 'b', text: '{MarketName, Product} → Stock' },
      { id: 'c', text: '{Stock, MarketName} → Product' },
      { id: 'd', text: '{Product} → MarketName' }
    ],
    correctOptionId: 'b',
    correctOptionIds: ['b'],
    explanation: '• MarketName has multiple products for SpendWise and MarkIt, so (a) fails.\n• In (c), (SpendWise, 6) has both Spicemix and Cookies, so (c) fails.\n• In (d), Shampoo appears under SpendWise and ShopLuck, so (d) fails.\n• For each unique combination of {MarketName, Product}, there is exactly one value of Stock. Thus, {MarketName, Product} → Stock holds.\nHence, option (b) is correct.'
  },
  {
    id: 33,
    assignment: 4,
    assignmentTitle: 'Assignment 4',
    topic: 'Normal Forms (BCNF & 3NF)',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the relation Smartphone(model, name, manufacturer, battery) and the functional dependencies are:\n• FD1: model → name\n• FD2: model → manufacturer, battery\n• FD3: model, manufacturer → battery\n\nIdentify the incorrect statement related to the relation Smartphone.',
    options: [
      { id: 'a', text: 'Smart phone is in First Normal Form' },
      { id: 'b', text: 'Smart phone is in Second Normal Form' },
      { id: 'c', text: 'Smart phone is in BCNF' },
      { id: 'd', text: 'Smart phone is not normalized' }
    ],
    correctOptionId: 'd',
    correctOptionIds: ['d'],
    explanation: 'The canonical cover for the FDs is model → name, manufacturer, battery. The candidate key is model. In every FD, the determinant is a superkey. Therefore, Smartphone is in BCNF, which implies it is in 1NF, 2NF, and 3NF. Thus, stating that it is "not normalized" is incorrect.\nHence, option (d) is the incorrect statement.'
  },
  {
    id: 34,
    assignment: 4,
    assignmentTitle: 'Assignment 4',
    topic: '2NF vs 3NF Evaluation',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the relation VirtualConf(ConfID, ConfLink, Subject, Admin, Participants).\nWhich of the following set of Functional Dependencies should be chosen so that VirtualConf can be in 2NF but not in 3NF?',
    options: [
      { id: 'a', text: 'ConfID → {ConfLink, Subject}\nConfLink → Participants\nAdmin → Subject' },
      { id: 'b', text: '{ConfID, ConfLink} → {Subject, Admin, Participants}\n{Admin, Subject} → {ConfLink, Participants, ConfID}' },
      { id: 'c', text: '{ConfID, ConfLink} → {Subject, Admin, Participants}\nAdmin → ConfLink' },
      { id: 'd', text: '{ConfID, Admin} → {ConfLink, Subject}\nConfLink → Participants' }
    ],
    correctOptionId: 'd',
    correctOptionIds: ['d'],
    explanation: 'For option (d), candidate key is {ConfID, Admin}. No non-prime attribute is dependent on a proper subset of the candidate key (so it is in 2NF). But ConfLink is non-prime and determines non-prime Participants (transitive dependency: {ConfID, Admin} -> ConfLink -> Participants). This violates 3NF.\nHence, option (d) is correct.'
  },
  {
    id: 35,
    assignment: 4,
    assignmentTitle: 'Assignment 4',
    topic: 'Candidate Key Modification',
    questionType: 'MSQ',
    marks: 2,
    question: 'Consider the following relation:\nMeasurement(sensor, device, dataform, uprange, lowrange, delay, status)\nwith the following Functional dependency set (F):\nFD1: {sensor, device, status} → {dataform, uprange, lowrange}\nFD2: sensor → {delay, status}\nFD3: {status, delay, dataform} → {sensor, device}\n\nMeasurement has 3 candidate keys. Keys K1, K2, and K3 has 2, 2, and 3 attributes respectively. The database admin issues the following order:\nX needs to be appended to the R.H.S of FD_i so that only K3 and (K1 ∩ K2) become the candidate keys of Measurement. Find X and i.',
    options: [
      { id: 'a', text: 'X = dataform, i = 1' },
      { id: 'b', text: 'X = delay, i = 1' },
      { id: 'c', text: 'X = dataform, i = 2' },
      { id: 'd', text: 'X = device, i = 2' }
    ],
    correctOptionId: 'c, d',
    correctOptionIds: ['c', 'd'],
    explanation: 'The candidate keys are:\nK1 = {device, sensor}\nK2 = {dataform, sensor}\nK3 = {dataform, delay, status}\nK1 ∩ K2 = sensor.\nFor sensor alone to be a candidate key, its closure must include all attributes. Appending either device or dataform to the R.H.S of FD2 (sensor → ...) allows sensor to determine everything.\nHence, options (c) and (d) are correct.'
  },
  {
    id: 36,
    assignment: 4,
    assignmentTitle: 'Assignment 4',
    topic: 'Covering of Functional Dependencies',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the following relation CabService(RegNo, Vehicle, Color, Capacity, Owner) with the following Functional Dependency sets:\nC1 = {\n  FD1: {Vehicle, Color} → Capacity\n  FD2: RegNo → {Vehicle, Capacity, Owner}\n}\nC2 = {\n  FD1: Vehicle → {Color, Capacity}\n  FD2: RegNo → {Vehicle, Owner}\n}\n\nWhich of the following statements is true?',
    options: [
      { id: 'a', text: 'Neither C1 covers C2 nor C2 covers C1' },
      { id: 'b', text: 'C2 covers C1 but C1 does not cover C2' },
      { id: 'c', text: 'C1 covers C2 but C2 does not cover C1' },
      { id: 'd', text: 'Both C1 covers C2 and C2 covers C1' }
    ],
    correctOptionId: 'b',
    correctOptionIds: ['b'],
    explanation: 'Under C1, (Vehicle)+ = {Vehicle}, which cannot determine Color or Capacity. Thus Vehicle → {Color, Capacity} in C2 cannot be derived from C1. Under C2, (RegNo)+ = {RegNo, Vehicle, Color, Capacity, Owner}, which covers all FDs of C1. Thus C2 covers C1, but C1 does not cover C2.\nHence, option (b) is correct.'
  },
  {
    id: 37,
    assignment: 4,
    assignmentTitle: 'Assignment 4',
    topic: 'Attribute Closure Computation',
    questionType: 'MCQ',
    marks: 2,
    question: 'In the following relation R suppose the following functional dependency holds:\nF = { m → n, np → g, o → p, q → p, n → q }\n\nThe closure of (n)+ is:',
    options: [
      { id: 'a', text: '(n, m, q, p, g)' },
      { id: 'b', text: '(n, q, p, g)' },
      { id: 'c', text: '(n, o, p, q)' },
      { id: 'd', text: '(n, q, g, o)' }
    ],
    correctOptionId: 'b',
    correctOptionIds: ['b'],
    explanation: '• Start with (n)+ = {n}\n• n → q gives {n, q}\n• q → p gives {n, q, p}\n• np → g gives {n, q, p, g}\nNo other dependency applies because neither m nor o can be derived.\nThus, (n)+ = (n, q, p, g).\nHence, option (b) is correct.'
  },
  {
    id: 38,
    assignment: 4,
    assignmentTitle: 'Assignment 4',
    topic: 'Canonical Cover & Extraneous Attributes',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the following relation:\nMeasurement(sensor, device, dataform, uprange, lowrange, delay, status)\nwith the following Functional dependency set (F) = {\n  FD1: sensor, device, status → dataform, uprange, lowrange\n  FD2: sensor → delay, status\n  FD3: status, delay, dataform → sensor, device\n}\n\nWhich of the following Functional Dependencies will not be present in the Canonical Cover of F after the application of Union Rule on the final Functional Dependencies?',
    options: [
      { id: 'a', text: '{sensor, device, status} → {dataform, uprange, lowrange}' },
      { id: 'b', text: 'sensor → {delay, status}' },
      { id: 'c', text: '{status, delay, dataform} → {sensor, device}' },
      { id: 'd', text: '{sensor, device} → {dataform, uprange, lowrange}' }
    ],
    correctOptionId: 'a',
    correctOptionIds: ['a'],
    explanation: 'In FD1, status is extraneous on the L.H.S because under F, (sensor, device)+ already determines status (since sensor → status from FD2). Removing status leaves {sensor, device} → {dataform, uprange, lowrange}. Therefore, {sensor, device, status} → ... is eliminated and will not be present in the Canonical Cover.\nHence, option (a) is correct.'
  },
  {
    id: 39,
    assignment: 4,
    assignmentTitle: 'Assignment 4',
    topic: 'Decomposition Properties (Lossless & Dependency Preservation)',
    questionType: 'MCQ',
    marks: 2,
    question: 'Consider the following relation:\nVirtualConf(ConfID, ConfLink, Day, Admin, Subject, Participants) with the following Functional Dependencies:\nFD1: ConfID → ConfLink\nFD2: Admin → Subject\nFD3: {ConfID, Day} → Participants\nFD4: {ConfLink, Subject} → {Day, Admin}\n\nThe relation is decomposed into:\nVirtualConf1(ConfID, ConfLink, Admin, Subject)\nVirtualConf2(ConfID, Admin, Day, Participants)\n\nWhich of the following is true about the decomposition?',
    options: [
      { id: 'a', text: 'Both lossless and dependency preserving.' },
      { id: 'b', text: 'Neither lossless nor dependency preserving.' },
      { id: 'c', text: 'Lossless but not dependency preserving.' },
      { id: 'd', text: 'Lossy but dependency preserving.' }
    ],
    correctOptionId: 'c',
    correctOptionIds: ['c'],
    explanation: '• Intersection of attributes is {ConfID, Admin}. In VirtualConf1, (ConfID, Admin)+ = {ConfID, ConfLink, Admin, Subject}, which is a superkey of VirtualConf1. Therefore, the decomposition is Lossless.\n• FD4 ({ConfLink, Subject} → {Day, Admin}) spans both relations and cannot be derived from the FDs local to VirtualConf1 or VirtualConf2. Thus it violates dependency preservation.\nHence, option (c) is correct.'
  },
  {
    id: 40,
    assignment: 4,
    assignmentTitle: 'Assignment 4',
    topic: 'Multivalued Dependencies (MVD)',
    questionType: 'MSQ',
    marks: 2,
    question: 'Consider the relation Person(Pname, Hobby, Language). A Person can have many hobbies and can speak many languages independently. Which dependency exists?',
    options: [
      { id: 'a', text: 'Pname ↠ Hobby' },
      { id: 'b', text: 'Pname, Hobby ↠ Language' },
      { id: 'c', text: 'Pname ↠ Language' },
      { id: 'd', text: 'Hobby, Language ↠ Pname' }
    ],
    correctOptionId: 'a, c',
    correctOptionIds: ['a', 'c'],
    explanation: 'Since hobbies and languages are independent sets of values associated with each Person, for a given Pname, every hobby can combine with every language spoken by that person. This is the definition of Multivalued Dependency: Pname ↠ Hobby and Pname ↠ Language.\nHence, options (a) and (c) are correct.'
  }
];
