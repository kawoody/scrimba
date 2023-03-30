
export const posts = [...Array(13)].map((item,i) => {
    const rand1 = Math.floor(Math.random() * 300) + 200
    const rand2 = Math.floor(Math.random() * 300) + 200

    return {
        title: `Blog Post Number ${i+1}`,
        date: `July ${i+10}, 2023`,
        blurb: `I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.`,
        imgSrc: `https://placekitten.com/${rand1}/${rand2}`,
        imgAlt: `kitten ${i+1}`
    }
})