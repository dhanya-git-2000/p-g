export const menu = [
    {
        name: "Tenant",
        table_name: [
            {
                name: "Tenant Name"
            },
            {
                name: "Packages"
            },
            {
                name: "Packages Backup"
            },
            {
                name: "Artifacts"
            },
            {
                name: "Credentials"
            },
            {
                name: "Global Variables"
            },
            {
                name: "Number Ranges"
            }
        ],
        table_data: [
            { 
                tenant_name:"Tenant1" ,
                Package:100, // Package Count
                Package_Backup:50,  // Packages Backup Count
                Artifact:200, // Artifacts Count
                Credential:30,  // Credential Count
                Global_Variable:75,  // Global Variables Count
                Number_Range:40   // Number Ranges Count
            },
            {   
                tenant_name:"Tenant2" ,
                Package:200, // Package Count
                Package_Backup:50,  // Packages Backup Count
                Artifact:250, // Artifacts Count
                Credential:40,  // Credential Count
                Global_Variable:55,  // Global Variables Count
                Number_Range:40   // Number Ranges Count
            },
            {   
                tenant_name:"Tenant3" ,
                Package:250, // Package Count
                Package_Backup:50,  // Packages Backup Count
                Artifact:200, // Artifacts Count
                Credential:41,  // Credential Count
                Global_Variable:50,  // Global Variables Count
                Number_Range:45   // Number Ranges Count
            }


        ]
    }
   
] 
export const menu2=[
    {
        name: "Failover",
        table_name: [
            {
                name: "Source"
            },
            {
                name: "Target"
            },
            {
                name: "Last performed on"
            },
            {
                name: "number of times performed"
            },
            {
                name: "last performed by"
            },
 
        ],
        table_data: [
            {
                Source:"Server A",
                Target:"Server B",
                Last_performed_on:"2024-09-22",
                number_of_times_performed:5,
                last_performed_by:"Admin User"
            },
            {
                Source:"Server C",
                Target:"Server D",
                Last_performed_on:"2024-09-23",
                number_of_times_performed:3,
                last_performed_by:"Admin User 2"
            }
            
            
        ]
    },
    {
        name: "Switchback",
        table_name: [
            {
                name: "Source"
            },
            {
                name: "Target"
            },
            {
                name: "Last performed on"
            },
            {
                name: "number of times performed"
            },
            {
                name: "last performed by"
            },
 
        ],
        table_data: [
            {
                Source:"Server A",
                Target:"Server B",
                Last_performed_on:"2024-09-22",
                number_of_times_performed:5,
                last_performed_by:"Admin User"
            },
            {
                Source:"Server C",
                Target:"Server D",
                Last_performed_on:"2024-09-23",
                number_of_times_performed:3,
                last_performed_by:"Admin User 2"
            }
            
            
        ]

    },
    {
        name: "Failover_configuration",
        table_name: [
            {
                name: "Source"
            },
            {
                name: "Target"
            },
            {
                name: "Last performed on"
            },
            {
                name: "number of times performed"
            },
            {
                name: "last performed by"
            },
 
        ],
        table_data: [
            {
                Source:"Server A",
                Target:"Server B",
                Last_performed_on:"2024-09-22",
                number_of_times_performed:5,
                last_performed_by:"Admin User 1"
            },
            {
                Source:"Server C",
                Target:"Server D",
                Last_performed_on:"2024-09-23",
                number_of_times_performed:3,
                last_performed_by:"Admin User 3"
            }
            
            
        ]
    }
]
