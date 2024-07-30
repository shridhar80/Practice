CREATE DATABASE TFLPortal;

USE TFLPortal;

CREATE TABLE employees (
    id INT NOT NULL PRIMARY KEY,
    hiredon DATETIME,
    reportingid INT,
    CONSTRAINT fk_self_employees FOREIGN KEY (reportingid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE projects (
    id INT IDENTITY(1,1) PRIMARY KEY,
    title VARCHAR(40),
    startdate DATETIME NOT NULL DEFAULT GETDATE(),
    enddate DATETIME,
    description TEXT,
    status VARCHAR(20) DEFAULT 'notstarted' CHECK (status IN ('incomplete', 'cancelled', 'notstarted', 'inprogress', 'completed'))
);

CREATE TABLE projectallocations (
    id INT IDENTITY(1,1) PRIMARY KEY,
    projectid INT NOT NULL,
    employeeid INT NOT NULL,
    title VARCHAR(20),
    assignedon DATETIME,
    releasedon DATETIME DEFAULT NULL,
    status VARCHAR(3) DEFAULT 'yes' CHECK (status IN ('yes', 'no')),
    CONSTRAINT fk_projects_projectallocations_projectid FOREIGN KEY (projectid) REFERENCES projects(id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_employee_projectallocations_employeeid FOREIGN KEY (employeeid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE sprints (
    id INT IDENTITY(1,1) PRIMARY KEY,
    title VARCHAR(40) NOT NULL,
    startdate DATETIME NOT NULL,
    enddate DATETIME NOT NULL,
    goal VARCHAR(200),
    projectid INT,
    CONSTRAINT fk_projects_sprints_projectid FOREIGN KEY (projectid) REFERENCES projects(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE tasks (
    id INT IDENTITY(1,1) PRIMARY KEY,
    title VARCHAR(500),
    tasktype VARCHAR(20) CHECK (tasktype IN ('userstory', 'task', 'bug', 'issues', 'meeting', 'learning', 'mentoring', 'others')),
    description VARCHAR(400) DEFAULT '',
    assignedto INT,
    assignedby INT,
    createdon DATETIME,
    assignedon DATETIME,
    startdate DATETIME,
    duedate DATETIME,
    status VARCHAR(20) DEFAULT 'todo' CHECK (status IN ('todo', 'inprogress', 'completed')),
    CONSTRAINT fk_employees_tasks_assignedby FOREIGN KEY (assignedby) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_employees_tasks_assignedto FOREIGN KEY (assignedto) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE sprinttasks (
    id INT IDENTITY(1,1) PRIMARY KEY,
    sprintid INT,
    taskid INT,
    CONSTRAINT fk_tasks_sprinttasks_taskid FOREIGN KEY (taskid) REFERENCES tasks(id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_sprints_sprinttasks_sprintid FOREIGN KEY (sprintid) REFERENCES sprints(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE timesheets (
    id INT IDENTITY(1,1) PRIMARY KEY,
    createdon DATETIME,
    status VARCHAR(20) DEFAULT 'inprogress' CHECK (status IN ('inprogress', 'submitted', 'approved', 'rejected')),
    modifiedon DATETIME DEFAULT GETDATE(),
    createdby INT NOT NULL,
    CONSTRAINT unique_employee_timesheets UNIQUE (createdon, createdby),
    CONSTRAINT fk_employees_timesheets_createdby FOREIGN KEY (createdby) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE timesheetentries (
    id INT IDENTITY(1,1) PRIMARY KEY,
    fromtime TIME,
    totime TIME,
    timesheetid INT NOT NULL,
    taskid INT,
    hours AS ((DATEDIFF(SECOND, fromtime, totime)) / 3600.0),
    CONSTRAINT fk_tasks_timesheetentries_taskid FOREIGN KEY (taskid) REFERENCES tasks(id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_timesheets_timesheetentries_timesheetid FOREIGN KEY (timesheetid) REFERENCES timesheets(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE leaveallocations (
    id INT IDENTITY(1,1) PRIMARY KEY,
    roleid INT NOT NULL UNIQUE,
    sick INT NOT NULL,
    casual INT NOT NULL,
    paid INT NOT NULL,
    unpaid INT NOT NULL,
    financialyear INT NOT NULL
);

CREATE TABLE leaveapplications (
    id INT IDENTITY(1,1) PRIMARY KEY,
    employeeid INT NOT NULL,
    createdon DATETIME,
    fromdate DATETIME,
    todate DATETIME,
    status VARCHAR(20) DEFAULT 'applied' CHECK (status IN ('notsanctioned', 'sanctioned', 'applied')),
    leavetype VARCHAR(10) CHECK (leavetype IN ('casual', 'sick', 'paid', 'unpaid')),
    CONSTRAINT fk_employees_leaveapplications_employeeid FOREIGN KEY (employeeid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE salarystructures (
    id INT IDENTITY(1,1) PRIMARY KEY,
    employeeid INT NOT NULL,
    basicsalary DECIMAL(18,2) NOT NULL,
    hra DECIMAL(18,2) NOT NULL,
    da DECIMAL(18,2) NOT NULL,
    lta DECIMAL(18,2) NOT NULL,
    variablepay DECIMAL(18,2) NOT NULL,
    CONSTRAINT fk_employees_salarystructures_employeeid FOREIGN KEY (employeeid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE salaryslips (
    id INT IDENTITY(1,1) PRIMARY KEY,
    employeeid INT NOT NULL,
    paydate DATETIME,
    monthlyworkingdays INT NOT NULL,
    deduction DECIMAL(18,2) NOT NULL,
    tax DECIMAL(18,2) NOT NULL,
    pf DECIMAL(18,2) NOT NULL,
    amount DECIMAL(18,2) NOT NULL,
    CONSTRAINT fk_employees_salaryslips_employeeid FOREIGN KEY (employeeid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE
);



