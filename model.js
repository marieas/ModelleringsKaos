const model = {
    // app-ting
    app: {
        currentPage: 'login', 
        userType: 'admin'
    },
    
    // inputs til hver side
    inputs: {
        loginPage: {
            userName: '',
            password: '',
        },
        fillSurveyPage: {
            questions : [{
                questionId: 1,
                answers:[{isChecked: true, text: 'svar 1'},
                         {isChecked: false, text: 'svar 2'}
                        ],
                friTextAnswers:['mitt svar'] 
            },
            {
                questionId: 2,
                answers:[{isChecked: true, text: 'svar 1'},
                         {isChecked: true, text: 'svar 2'}
                        ],
                friTextAnswers:[] 
            },
            ]
        },
        emailSendingPage: {
            addEmail: '',
            chooseAll : false,
            chosenUsers: [1,2] // linker til users[] - man kan løkke gjennom chosen users og hente ut de fra user der userId matcher tallet
        },
        createSurveyPage: {
            surveyTitle: 'Lønningspils',
            questions : [{
                questionText: 'Når?',
                isMultipleChoice: true,
                answers:[{isChecked: true, text: 'svar 1'},
                         {isChecked: false, text: 'svar 2'}
                        ],
                friTextAnswers:['mitt svar'] 
            }]
        }
    },
    
    // felles data
surveys : [
            {
               surveyId: 1, title: 'lønningspils: noen forslag', ongoing: true,
               numberOfAnswer: 23, completedDate: ''
            },
            {
               surveyId: 2, title: 'julebord 2022', ongoing: false,
               numberOfAnswer: 34, completedDate: '11.11.22'
            }
          ],

questions: [    
                {questionId: 1, surveyId: 1, title: 'Når?'}, // linker til lønningspils spørreundersøkelsen (surveyid: 1)
                {questionId: 2, surveyId: 1, title: 'Hvor?'},// linker til lønningspils spørreundersøkelsen (surveyid: 1)
                {questionId: 3, surveyId: 2, title: 'Når?'}  // linker til lønningspils spørreundersøkelsen (surveyid: 2)
           ],
answers: [  //Når man skal beregne antall som har svart/ statistikk kan man feks filtrere answers på questionid 1 og hente alle 
            //svarene for når folk vil ha julebord - hvor mange har huket av for den 11.12.2023, den 10.12.2023 etc
            {
                questionId: 1,                                    // linker til spørsmål 1, når julebord?
                choices: [{isChecked: true, text: '11.12.2023'},  // huket av for at den 11.12 passer
                          {isChecked: false, text: '10.12.2023'}],// den 10.12 passet ikke
                friTextAnswers:['09.12.2023']                     // lagt til 09.12 som forslag
            },
            {
                questionId: 1,                                    // linker til spørsmål 1, når julebord? (en annen person har også svart på dette)
                choices: [{isChecked: true, text: '11.12.2023'},  // huket av for at den 11.12 passer
                          {isChecked: true, text: '10.12.2023'}], // den 10.12 passer også
                friTextAnswers:[]                     
            },
            {
                questionId: 2,                              // linker til spørsmål 2, hvor julebord?
                choices: [
                          {isChecked: true, text: 'Tønsberg'},  //Huket av for tønsberg som lokasjon
                          {isChecked: true, text: 'Sandefjord'} //Huket av for sandefjord også som lokasjon
                         ],
                friTextAnswers:[]
            }
        ],
users: [
             {userId: 1, emailAddress: 'Eksempel@gmail.com'},
             {userId: 2, emailAddress: 'Eksempel2@gmail.com'},
             {userId: 3, emailAddress: 'Eksempe3@gmail.com'}
        ]
};