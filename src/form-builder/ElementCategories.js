const CATEGORIES = [
    {
        name: 'Text',
        code: 'text',
        elements: [
            {
                type: 'Label',
                code: 'text:label'
            },
            {
                type: 'Header',
                code: 'text:header'
            }
        ]
    }
];

export function getElementByCode(code) {
    let namespace = code.split(':');
    let category = CATEGORIES.find(c => c.code === namespace[0]);
    return category.elements.find(e => e.code === code);
}

export default CATEGORIES;
