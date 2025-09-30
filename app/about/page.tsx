import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About AIOWTA TECHNOLOGIES</h1>
              <p className="text-lg text-muted-foreground">
                Your trusted partner in IT solutions and network infrastructure
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  At <b>Aiowta Tech</b> we are dedicated to empowering businesses through reliable, secure, and
                  innovative IT solutions. With a strong foundation in networking and IT infrastructure
                  management, we help organizations streamline operations and embrace digital transformation
                  with confidence.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our team of experienced IT professionals brings deep technical expertise and a customer-first
                  mindset to every project. Whether it’s building resilient networks, tech refresh, service migration
                  or providing 24/7 IT support, we tailor our services to align with your business goals.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We believe technology should be an enabler, not a challenge. That’s why we focus on delivering
                  <b> scalable, cost-effective, and future-ready solutions</b> designed to drive growth and efficiency..
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  At the heart of our business are our core values: innovation, veracity, and customer success.
                  These guide us in every interaction, ensuring that our clients not only receive exceptional service
                  but also a trusted long-term partner in their IT journey.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <b>Your success is our mission—let’s build the future of your business together.</b>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
                    <p className="text-sm text-muted-foreground">
                      Making an impact that matters in your business through technological innovation to
                      enhance services, growth, and customer satisfaction.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Our Team</h3>
                    <p className="text-sm text-muted-foreground">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Our Values</h3>
                    <p className="text-sm text-muted-foreground">
                      We are committed to innovation and continuous improvement by embracing new technologies, while keeping a strong customer focus through reliable, tailored IT solutions that align with business goals. Guided by veracity, we take ownership and proactively resolve client concerns, and we uphold respect by treating everyone with dignity and fairness to foster lasting partnerships.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
