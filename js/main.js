// DayJS
dayjs.extend(dayjs_plugin_customParseFormat);

// VueJS
const app = new Vue ({
    el: '#root',
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Lorenzo',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '28/04/2021 16:30:55',
                        message: 'Sei riusciuto a finire l\'esercizio?',
                        status: 'sent'
                    },
                    {
                        date: '28/04/2021 16:50:00',
                        message: 'Io ci sto ancora lavorando',
                        status: 'sent'
                    },
                    {
                        date: '28/04/2021 16:55:22',
                        message: 'Con qualche difficolt?? ma alla fine ce l\'ho fatta',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Giacomo',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '28/04/2021 20:30:30',
                        message: 'Hai dato da mangiare al gatto?',
                        status: 'sent'
                    },
                    {
                        date: '28/04/2021 20:31:22',
                        message: 'Cambiagli anche l\'acqua per favore',
                        status: 'sent'
                    },
                    {
                        date: '28/04/2021 21:05:11',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Giorgio',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '26/04/2021 15:40:21',
                        message: 'Sei andato in palestra?',
                        status: 'sent'
                    },
                    {
                        date: '26/04/2021 15:50:00',
                        message: 'Pi?? tardi ti raggiungo',
                        status: 'sent'
                    },
                    {
                        date: '26/04/2021 16:15:22',
                        message: 'Ok, perfetto, a dopo!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Roberta',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '27/04/2021 19:31:55',
                        message: 'Hai fatto la spesa?',
                        status: 'sent'
                    },
                    {
                        date: '27/04/2021 19:32:30',
                        message: 'Ricordati anche di prendere il pane',
                        status: 'sent'
                    },
                    {
                        date: '27/04/2021 19:35:22',
                        message: 'Spesa fatta e pane comprato!',
                        status: 'received'
                    }
                ],
            },
        ],
        emoticons: ["???","????","????","????","????","????","????","????","????","????","???","????","????","????","????","???","????","????","????","????","????","????","????","????","????","????","????","????","????","????","????","???","????","????","????","????","????","????","????","????","????","????","????","????","????","????","????","???","????","????","????","????","????","????","????","????","????","????","????","????","????","????","????","????","????","????","????","????","????","????","????","????","????","????","???","????","???","????","????","????","????","????","????","????","????","????","????","????","????","????","????","????"],
        currentIndex: 0,
        falseIndex: -1, //needed to not show active class on first landing
        showChatToggle: false,
        switchBell: false,
        changeNotificationText: 'Attiva',
        inputChatText: '',
        findContactName: '',
        customAnswer: '',
        hover: false,
        darkMode: false,
        textMode: 'Dark',
        showEmoji: false,
    },
    methods: {
        getContactID(index) {
            this.currentIndex = index;
            this.falseIndex = index;
            this.showChatToggle = true;
        },
        submitInputText() {
            // Validation
            if (this.inputChatText.trim() != '') {
                // Adding the new object to the existing main array, with the new message from the input
                let newMessage = {
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    message: this.inputChatText,
                    status: 'sent',
                };
                // Pushing the new oject in the main array
                this.contacts[this.currentIndex].messages.push(newMessage);
                this.scrollToEnd();
                this.customAnswers();
                if (this.customAnswer != ''){   //if necessary to receive no answer
                    // After 1 sec a new object with the answer will be pushed in the main array
                    setTimeout(() => {
                        let newAnswer = {
                            date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                            message: this.customAnswer,
                            status: 'received',
                        };
                        this.contacts[this.currentIndex].messages.push(newAnswer);
                        // Get last connection time == last answer message time
                        this.contacts[this.currentIndex].lastConnection = dayjs().format('HH.mm');
                        this.scrollToEnd();
                    }, 1000);
                }
            }
            // Reset
            this.inputChatText = '';
        },
        findContact() {
            this.contacts.forEach((element) => {
                if (!element.name.toLowerCase().includes(this.findContactName.toLowerCase())) {
                    element.visible = false;
                }else {
                    element.visible = true;
                }
            });
        },
        scrollToEnd() {
            setTimeout(() => {
                this.$refs.scrollToEnd.scrollTop = this.$refs.scrollToEnd.scrollHeight;
            },5);
        },
        customAnswers() {
            let lastMessage = this.contacts[this.currentIndex].messages[this.contacts[this.currentIndex].messages.length - 1].message;
            switch(lastMessage.toLowerCase().trim()) {
                case 'come va?':
                case 'come stai?':
                    this.customAnswer = 'Tutto bene, grazie!';
                    break;
                case 'ciao':
                    this.customAnswer = 'Ciao!';
                    break;
                case 'vuoi uscire?':
                case 'vuoi andare al cinema?':
                case 'vuoi fare una passeggiata?':
                    this.customAnswer = 'Si, perch?? no! Ci vediamo alle 20?';
                    break;
                case 'va bene':
                    this.customAnswer = 'A pi?? tardi allora :D';
                    break;s
                case 'a dopo':
                    this.customAnswer = '';
                    break;
                default:
                    this.customAnswer = 'Ok';
            }
        },
        closeChat() {
            this.showChatToggle = false;
            this.falseIndex = -1;
        },
        switchNotification() {
            this.switchBell = !this.switchBell;
            if (this.changeNotificationText == 'Attiva') {
                return this.changeNotificationText = 'Disattiva';
            }else {
                return this.changeNotificationText = 'Attiva';
            }
        },
        changeMode() {
            this.darkMode = !this.darkMode;
            if (this.textMode == 'Dark') {
                return this.textMode = 'Light';
            }else {
                return this.textMode = 'Dark';
            }
        },
        showEmoticon() {
            this.showEmoji = !this.showEmoji;
        },
        selectEmoji(index) {
            this.inputChatText += this.emoticons[index];
        },
    },
});