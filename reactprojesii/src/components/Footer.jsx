
export default function Footer() {

    const simdi = new Date().getHours()
    const acilisZaman = 10
    const kapanisZaman = 23

    const isOpen = simdi >= acilisZaman && simdi <= kapanisZaman 


    return (
        <footer>
            {
                isOpen ? (
                    <p> Akaşam {kapanisZaman}'e kadar açığız. </p>
                ) : (
                    <p> Şu an kapalıyız. </p>
                )
            }
        </footer>
    )
}

