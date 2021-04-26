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
        ],
        currentIndex: '0',
        inputChatText: '',
    },
    methods: {
        getContactID(index) {
            this.currentIndex = index;
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
                // After 1 sec a new object with the answer will be pushed in the main array
                setTimeout(() => {
                    let newAnswer = {
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        message: 'Ok',
                        status: 'received',
                    };
                    this.contacts[this.currentIndex].messages.push(newAnswer);
                    // let lastConnection = dayjs().format('HH.mm');
                    this.contacts[this.currentIndex].lastConnection = dayjs().format('HH.mm');
                }, 1000);
            }
            // Reset
            this.inputChatText = '';
        },
    },
});