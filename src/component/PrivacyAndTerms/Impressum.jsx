import React from 'react';
import './index.css';
import { Container } from '@mui/material';
import Pages from './Pages';
const Impressum = () => {
    return (
        <div style={{ padding: '50px 0px' }}>
            <Container maxWidth="lg">
                <div className='mainBox'>
                    <div className='left-side'>
                        <Pages />
                    </div>
                    <div className='right-side' >
                        <div className='Impressum'>
                            <h2>Impressum</h2>
                            <p> Angaben gemäß § 5 TMG </p>

                            <div style={{ margin: '40px 0px' }}>
                                <p>Vertretungsberechtigte Gesellschafter: Neom GmbH</p>
                                <p> Neue Mainzer Str. 46-50</p>
                                <p> 60311 Frankfurt am Main</p>
                                <p>  Deutschland</p>
                            </div>

                            <p>Geschäftsführer: Fahed Jaarah </p>

                            <div style={{ margin: '40px 0px' }}>
                                <p>Registergericht: Frankfurt am Main </p>
                                <p>  Handelsregister HRB: 123437 </p>
                            </div>

                            <p>Kontakt</p>

                            <p>E-Mail: info@uni-app.com</p>

                            <p>Haftungsausschluss:</p>

                            <p>Haftung für Inhalte</p>

                            <div style={{ margin: '40px 0px' }}>
                                <p style={{ lineHeight: '1.8' }}>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
                                    jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
                                    Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                                    Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
                                    oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
                                    erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
                                    wir diese Inhalte umgehend entfernen.
                                </p>
                            </div>

                            <p>Haftung für Links </p>

                            <div style={{ margin: '40px 0px' }}>
                                <p style={{ lineHeight: '1.8' }}>

                                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
                                    fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
                                    der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
                                    Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
                                    konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
                                    entfernen.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
export default Impressum;