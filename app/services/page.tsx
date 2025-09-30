import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Network,
  Server,
  Headphones,
  Cable,
  HardDrive,
  Wrench,
  Monitor,
  Printer,
  ShoppingCart,
  Database,
  Router,
  Laptop,
} from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-lg text-muted-foreground">
                Comprehensive IT solutions designed to meet your business needs
              </p>
            </div>
          </div>
        </section>

        {/* Services Sections */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-16">
              {/* Networking */}
              <div id="networking">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Network className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Networking</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <Router className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Network Refresh</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Modernize your network infrastructure with the latest technology to improve performance,
                        security, and reliability for your business operations.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Cable className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Network Cabling</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Professional structured cabling solutions including Cat5e, Cat6, and fiber optic installations
                        for optimal network connectivity and data transfer.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <HardDrive className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Rack & Stack</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Expert equipment installation and organization in server racks, ensuring proper cable
                        management, cooling, and accessibility for maintenance.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* IT Services */}
              <div id="it-services">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Server className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold">IT Services</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <ShoppingCart className="h-8 w-8 text-accent mb-2" />
                      <CardTitle>POS Installations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Complete point-of-sale system setup including hardware installation, software configuration, and
                        staff training for seamless retail operations.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Monitor className="h-8 w-8 text-accent mb-2" />
                      <CardTitle>PC Installations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Professional computer setup and deployment services including hardware assembly, operating
                        system installation, and software configuration.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Printer className="h-8 w-8 text-accent mb-2" />
                      <CardTitle>Printer Installations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Expert printer and multifunction device installation with network configuration, driver setup,
                        and user training for optimal productivity.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Technical Support */}
              <div id="technical-support">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Headphones className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Technical Support</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <Laptop className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Onsite IT Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Responsive on-location technical support for troubleshooting, repairs, and maintenance to
                        minimize downtime and keep your business running.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Database className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Data Center Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Specialized data center services including server maintenance, monitoring, backup management,
                        and emergency response for critical infrastructure.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Wrench className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Maintenance & Monitoring</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Proactive system monitoring and regular maintenance to prevent issues, optimize performance, and
                        ensure maximum uptime for your IT infrastructure.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
