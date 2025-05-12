import { Code } from "lucide-react";
import { School } from "lucide-react";
import { User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative"> 
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate about developing and security.
                        </h3>

                        <p className="text-muted-foreground">
                            I'm a self-taught developer and I strive to learn new things everyday,
                            whether it's a new programming language, framework, or design pattern.
                            But I have my main interest such as Cybersecurity. I
                        </p>

                        <p className="text-muted-foreground">
                            I love to create visually appealing websites and softwares while
                            being a enthusiat in Cybersecurity driven by a deep interest in network security,
                            threat analysis, vulnerability assessment, and so on.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get in Touch with Me.
                            </a>

                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                {" "}
                                Download CV.
                            </a>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 gap-6">
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">Developing</h4>
                                        <p className="text-muted-foreground">
                                            Developing and creating responsive websites and softwares with modern frameworks.
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">UI/UX</h4>
                                        <p className="text-muted-foreground">
                                            Designing user-friendly interfaces and seamless user experiences.
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                    <School className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">School</h4>
                                        <p className="text-muted-foreground">
                                            Currently doing my bachelor's degree in Cybersecurity in the Sunway University.
                                        </p>

                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
};