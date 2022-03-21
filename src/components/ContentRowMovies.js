import React from 'react'
import ContentMovies from './ContentMovies'

const ContentRowMovies = () => {

    let data = [
        {
            title: 'Movies in Data Base',
            color: 'primary',
            value: 21,
            icon: 'fa-film'
        },
        {
            title: 'Total Awards',
            color: 'success',
            value: 79,
            icon: 'fa-award'
        },
        {
            title: 'Actors quantity',
            color: 'warning',
            value: 49,
            icon: 'fa-user'
        }
    ]
    return (
        <div className="row">

            {
                data.map((item, index) => (
                    <ContentMovies
                        color={item.color}
                        title={item.title}
                        value={item.value}
                        icon={item.icon}
                        key={item.title + index}
                    />
                ))
            }

        </div>
    )
}

export default ContentRowMovies