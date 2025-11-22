'use client';

import Link from 'next/link';
import ContactForm from '@/hooks/ContactForm';
import Grid from '@/components/Grid/Grid';
import Small from '@/components/Small/Small';
import Title from '@/components/Title/Title';
import Paragraph from '@/components/Paragraph/Paragraph';
import Feedback from '@/components/Feedback/Feedback';
import Input from '@/components/Input/Input';
import Textarea from '@/components/Textarea/Textarea';
import Button from '@/components/Button/Button';
import Result from '@/components/Result/Result';
import Social from '@/components/Social/Social';
import Header from '@/components/Header/Header';
import Main from '@/components/Main/Main'
import Footer from '@/components/Footer/Footer';
import List from '@/components/List/List';
import Card from '@/components/Card/Card';
import Section from '@/components/Section/Section';

export default function Home() {
    const { form, result, loading, handleChange, handleSubmit } = ContactForm();

    return (
        <>
            <Header/>
            <Main>
                {/* Services */}
                <Section>
                    <Grid columns={3} id='services'>
                        <Card>
                            <Small>Service</Small>
                            <Title>Process<br />Automation</Title>
                            <Paragraph>Automate repetitive tasks with advanced macros. Increase productivity, minimize human errors, and enhance the accuracy of your business operations. This is ideal for teams that need to focus on strategic tasks and leave operational work to technology.</Paragraph>
                            <List>
                                <li>Routines & Databases</li>
                                <li>System Integrations</li>
                                <li>Data Analysis</li>
                            </List>
                        </Card>
                        <Card>
                            <Small>Service</Small>
                            <Title>Intelligent<br />Chatbots</Title>
                            <Paragraph>Implement intelligent chatbots to transform your customer service with artificial intelligence. Provide quick answers, reduce waiting times, and boost lead conversion 24/7. Ideal for companies looking to scale support efficiently and with personalization.</Paragraph>
                            <List>
                                <li>Whats. Telegram and Discord</li>
                                <li>AI Agents</li>
                                <li>Custom Flows</li>
                            </List>
                        </Card>
                        <Card>
                            <Small>Service</Small>
                            <Title>App<br />Development</Title>
                            <Paragraph>We create custom applications for web and mobile devices, developed to solve specific problems of your business. From internal management apps to customer engagement platforms, we deliver robust and intuitive solutions that optimize operations and open new revenue streams.</Paragraph>
                            <List>
                                <li>Android</li>
                                <li>UI/UX Design</li>
                            </List>
                        </Card>
                        <Card>
                            <Small>Service</Small>
                            <Title>Paid<br />Traffic</Title>
                            <Paragraph>Increase your visibility and conversions with strategic paid traffic campaigns. Precise segmentation, A/B testing, and continuous optimization to maximize ROI. Achieve real results with intelligent and measurable paid media.</Paragraph>
                            <List>
                                <li>Meta Ads</li>
                                <li>Google Ads</li>
                            </List>
                        </Card>
                        <Card>
                            <Small>Service</Small>
                            <Title>Development<br />Support</Title>
                            <Paragraph>Support for development teams that are overworked and require assistance. We help your internal teams manage heavy workloads, meet deadlines, and overcome technical challenges efficiently.</Paragraph>
                            <List>
                                <li>Resource Augmentation</li>
                                <li>Code Review & Quality Assurance (QA)</li>
                                <li>Project & Task Backlog Management</li>
                            </List>
                        </Card>
                        <Card>
                            <Small>Service</Small>
                            <Title>Technology<br />Consulting</Title>
                            <Paragraph>Our technology consulting services help your business make informed decisions. We analyze your current tech stack, define a future technology roadmap, and ensure your investments drive innovation, efficiency, and long-term business growth.</Paragraph>
                            <List>
                                <li>IT Strategy & Digital Transformation</li>
                                <li>Architecture & Cloud Migration</li>
                                <li>Process Optimization & Efficiency Audits</li>
                            </List>
                        </Card>
                    </Grid>
                </Section>
                {/* Contact */}
                <Section>
                    <Grid columns={1} id={'contact'}>
                        <Card>
                            <Small>Form</Small>
                            <Title>Contact</Title>
                            <Grid columns={3}>
                                <Input
                                    placeholder='Full Name'
                                    value={form.name}
                                    onChange={(e) => handleChange('name', e.target.value)}
                                    maxLength={250}
                                />
                                <Input
                                    placeholder='Your e-mail' 
                                    value={form.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                    maxLength={250}
                                    type={'email'}
                                />
                                <Input
                                    placeholder='Subject'
                                    value={form.subject}
                                    onChange={(e) => handleChange('subject', e.target.value)}
                                    maxLength={250}
                                />
                            </Grid>
                            <Grid columns={1}>
                                <Textarea
                                    placeholder="Message"
                                    value={form.message}
                                    onChange={(e) => handleChange('message', e.target.value)}
                                    maxLength={1000}
                                />
                                    {result.message && <Result type={result.type || 'info'}>{result.message}</Result>}
                                <Button onClick={handleSubmit} disabled={loading}>
                                    {loading ? 'Sending...' : 'Send'}
                                </Button>
                            </Grid>
                        </Card>
                        <Grid columns={4}>
                            <Card>
                                <Social href="https://wa.me/5516992399723?text=Ol%C3%A1%2C%20venho%20atrav%C3%A9s%20do%20site%20oficial%20para%20tirar%20d%C3%BAvidas%20sobre%20os%20servi%C3%A7os%20prestados." icon="bi bi-whatsapp" label="Whatsapp"></Social>
                            </Card>
                            <Card>
                                <Social href="https://t.me/L009TelegramBot" icon="bi bi-telegram" label="Telegram"></Social>
                            </Card>
                            <Card>
                                <Social href="https://discord.gg/wtzmwMnG" icon="bi bi-discord" label="Discord"></Social>
                            </Card>
                            <Card>
                                <Social href="#" icon="bi bi-linkedin" label="Linkedin"></Social>
                            </Card>
                        </Grid>
                    </Grid>
                </Section>
                {/* Feedbacks */}
                <Section>
                    <Grid columns={2} id={'feedbacks'}>
                        <Card>
                            <Small>Feedback</Small>
                            <Feedback avatar={'/images/avatar1.jpg'} name={'Olivia S.'} />
                            <Paragraph fontStyle='italic'>{'"The process automation service streamlined our internal workflows immediately. Paired with the Support Widget, our team’s efficiency has skyrocketed. L009 provides holistic solutions, not just tools. Highly recommend the consultation!"'}</Paragraph>
                        </Card>
                        <Card>
                            <Small>Feedback</Small>
                            <Feedback avatar={'/images/avatar2.jpg'} name={'David R.'} />
                            <Paragraph fontStyle='italic'>{'We used the Pixel Analyzer to gather specific engagement metrics, and L009 then developed a custom internal app for us based on that data. The synergy between their products and development team is unmatched. True data-driven progress."'}</Paragraph>
                        </Card>
                        <Card>
                            <Small>Feedback</Small>
                            <Feedback avatar={'/images/avatar3.jpg'} name={'Jennifer K.'} />
                            <Paragraph fontStyle='italic'>{'"The Technology Consulting session was invaluable in setting our roadmap. We immediately adopted the AI Metadata Generator afterward, which has made our content publishing cycle 10x faster. It’s clear they understand both strategy and execution."'}</Paragraph>
                        </Card>
                        <Card>
                            <Small>Feedback</Small>
                            <Feedback avatar={'/images/avatar4.jpg'} name={'Ryan B.'} />
                            <Paragraph fontStyle='italic'>{'"Our Paid Traffic campaigns delivered a 30% ROI increase in the first month. Implementing their Intelligent Chatbots simultaneously ensured that the high volume of new leads was handled instantly, 24/7. Seamless integration and fantastic results."'}</Paragraph>
                        </Card>
                    </Grid>
                </Section>
            </Main> 
            <Footer>
                <nav aria-label="Main links">
                    <Link href="/#home">Home</Link>
                    <Link href="/#services">Services</Link>
                    <Link href="/#contact">Contact</Link>
                    <Link href="/#feedbacks">Feedbacks</Link>
                    <Link href="/pages/terms">Terms of Use</Link>
                    <Link href="/pages/policy">Privacy Policy</Link>
                </nav>
            </Footer>
        </>
    );
}