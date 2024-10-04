import style from './supportTicketList.module.css';

function generateTicket(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth()+1;
    const day = currentDate.getDate()
    const status = ['new', 'archived', 'resolve'][Math.floor( Math.random() * 3)]

    const user = `User${Math.round(Math.random()*100)}`
    const message = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet expedita corrupti odio impedit modi eaque sed dicta tempore nemo distinctio rem iste maiores, et ea optio delectus architecto reiciendis? Assumenda!`

    return {
        date: `${year}-${month}-${day}`,
        user,
        message,
        status
    }
}

function prepareDescription( text: string){
    const description = text.slice(0, 32)
    return description;
}

export function SupportTicketList(){
    const tickets = [];
    for(let i = 0; i <= 5; i++){
        tickets.push( generateTicket() )
    }

    return <section className={style['section-support']}>
        <div className={style.container}>
            <h2>PANEL ZGŁOSZENIOWY</h2>
            <table className={style.table}>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>User</th>
                        <th>Message</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets.map( (ticket, index) => {

                        return <tr key={index}>
                            <td>{ticket.date}</td>
                            <td>{ticket.user}</td>
                            <td>{prepareDescription(ticket.message)}...</td>
                            <td>{ticket.status}</td>
                            <td>
                                <a href='#' className='link'>See more...</a>
                            </td>
                        </tr>}
                    )}
                </tbody>
            </table>
        </div>
    </section>
}