//Logic Building Coding Questions 

function generateSlug(title) {
    return title.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^-+/, '').replace(/-+$/, '')+ '.com';
}

console.log(generateSlug( "AlmaBetter Web Dev"));
