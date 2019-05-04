var people = [
    {
        firstname: 'John',
        lastname: 'Doe',
        addresses: [
            '222 Main St.',
            '234 Second St.',
        ]
    },
    {
        firstname: 'Jane',
        lastname: 'Doe',
        addresses: [
            '999 Main St.',
            '345 Second St.',
        ],
        greet : function() {
            return 'Hello There!'
        }
    }
]

console.table(people);
