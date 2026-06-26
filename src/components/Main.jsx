
import Entry from './Entry'
import data from '../data'

export default function Main() {

    const entryElements = data.map((entry) => {
        return (
            < Entry
                // 1. Passing as an attribute properties
                // id={entry.id}
                //     img={entry.img}
                //     title={entry.title}
                //     country={entry.country}
                //     googleMapsLinks={entry.googleMapsLink}
                //     dates={entry.dates}
                //     text={entry.text}

                // 2. Passing as an object
                // id={entry.id}
                // entry={entry}
                // 3. PAssing as spread object
                id={entry.id}
                {...entry}
            />


        )
    })
    return (
        <main >
            {entryElements}

        </main>
    );
} 