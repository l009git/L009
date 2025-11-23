import Section from '../Section/Section';
import Grid from '../Grid/Grid';
import Card from '../Card/Card';
import style from './Main.module.css';

const Main = function() {
    return (
        <main className={style.main}>
            <Section gap='15px' title='Our Services' description='Below are our main services; however, you can also contact us requesting something so that we can explore the possibility of developing it.'>
                <Grid columns={3}>
                    <Card>
                        <h2>Process<br />Automation</h2>
                        <p>Automate repetitive tasks with advanced macros. Increase productivity, minimize human errors, and enhance the accuracy of your business operations. This is ideal for teams that need to focus on strategic tasks and leave operational work to technology.</p>
                    </Card>
                    <Card>
                        <h2>Intelligent<br />Chatbots</h2>
                        <p>Implement intelligent chatbots to transform your customer service with artificial intelligence. Provide quick answers, reduce waiting times, and boost lead conversion 24/7. Ideal for companies looking to scale support efficiently and with personalization.</p>
                    </Card>
                    <Card>
                        <h2>App<br />Developmen</h2>
                        <p>We create custom applications for web and mobile devices, developed to solve specific problems of your business. From internal management apps to customer engagement platforms, we deliver robust and intuitive solutions that optimize operations and open new revenue streams.</p>
                    </Card>
                    <Card>
                        <h2>Paid<br />Traffic</h2>
                        <p>Increase your visibility and conversions with strategic paid traffic campaigns. Precise segmentation, A/B testing, and continuous optimization to maximize ROI. Achieve real results with intelligent and measurable paid media.</p>
                    </Card>
                    <Card>
                        <h2>Development<br />Support</h2>
                        <p>Support for development teams that are overworked and require assistance. We help your internal teams manage heavy workloads, meet deadlines, and overcome technical challenges efficiently.</p>
                    </Card>
                    <Card>
                        <h2>Technology<br />Consulting</h2>
                        <p>Our technology consulting services help your business make informed decisions. We analyze your current tech stack, define a future technology roadmap, and ensure your investments drive innovation, efficiency, and long-term business growth.</p>
                    </Card>
                </Grid>
            </Section>
        </main>
    );
}

export default Main;