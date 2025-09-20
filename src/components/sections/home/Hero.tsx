'use client';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Play,
  Star,
  Users,
  CheckCircle,
  Receipt,
  Calculator,
  BarChart3,
  Clock,
  Shield,
  Zap,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Hero() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/'); // Start free trial
  };

  const handleSecondaryAction = () => {
    setIsModalOpen(true); // Watch product demo
  };

  const handleBadgeAction = () => {
    router.push('/'); // View new features
  };
  // ACTION_PLACEHOLDER_END

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-20 size-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 size-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <button
              onClick={handleBadgeAction}
              className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary hover:bg-primary/20 transition-colors cursor-pointer"
              data-action-type="badge-link"
            >
              <Zap className="size-4 mr-2" />
              New: Automated Tax Calculations & Reporting
              <ArrowRight className="ml-2 size-4" />
            </button>
          </div>

          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Professional Invoicing
              <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Made Simple
              </span>
              for Your Business
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Streamline your financial workflow with Invoicely's powerful invoicing and accounting
              platform. Get paid faster, track expenses, and manage your finances with confidence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="group text-base px-8"
                onClick={handlePrimaryAction}
                data-action-type="primary-cta"
              >
                Start Free Trial
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group text-base px-8"
                onClick={handleSecondaryAction}
                data-action-type="secondary-cta"
              >
                <Play className="mr-2 size-5 transition-transform group-hover:scale-110" />
                View Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="size-8 rounded-full bg-gradient-to-br from-primary to-primary/60 border-2 border-background" />
                  <div className="size-8 rounded-full bg-gradient-to-br from-accent to-accent/60 border-2 border-background" />
                  <div className="size-8 rounded-full bg-gradient-to-br from-secondary to-secondary/60 border-2 border-background" />
                </div>
                <span className="ml-2">
                  <Users className="inline size-4 mr-1" />
                  25,000+ businesses trust us
                </span>
              </div>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
                <span className="ml-2">4.8/5 from 2,400+ reviews</span>
              </div>
            </div>
          </div>

          {/* Hero Dashboard Mockup */}
          <div className="mt-16 relative">
            <div className="relative mx-auto max-w-4xl">
              <div className="rounded-2xl border bg-card p-6 shadow-2xl">
                <div className="rounded-xl bg-gradient-to-br from-muted/30 to-muted/50 p-6">
                  {/* Mock Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="size-8 bg-primary rounded-lg flex items-center justify-center">
                        <Receipt className="size-4 text-primary-foreground" />
                      </div>
                      <span className="font-semibold text-foreground">Invoicely Dashboard</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="size-3 bg-accent rounded-full" />
                      <div className="size-3 bg-primary rounded-full" />
                      <div className="size-3 bg-secondary rounded-full" />
                    </div>
                  </div>

                  {/* Mock Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-background/80 rounded-lg p-4 border">
                      <div className="flex items-center gap-2 mb-2">
                        <BarChart3 className="size-4 text-primary" />
                        <span className="text-sm text-muted-foreground">Monthly Revenue</span>
                      </div>
                      <div className="text-2xl font-bold text-foreground">$24,580</div>
                      <div className="text-xs text-primary">+12.5% from last month</div>
                    </div>
                    <div className="bg-background/80 rounded-lg p-4 border">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="size-4 text-accent" />
                        <span className="text-sm text-muted-foreground">Pending Invoices</span>
                      </div>
                      <div className="text-2xl font-bold text-foreground">8</div>
                      <div className="text-xs text-accent">$5,240 outstanding</div>
                    </div>
                    <div className="bg-background/80 rounded-lg p-4 border">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="size-4 text-secondary" />
                        <span className="text-sm text-muted-foreground">Paid This Month</span>
                      </div>
                      <div className="text-2xl font-bold text-foreground">47</div>
                      <div className="text-xs text-secondary">94% payment rate</div>
                    </div>
                  </div>

                  {/* Mock Invoice List */}
                  <div className="bg-background/80 rounded-lg border p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-medium text-foreground">Recent Invoices</span>
                      <Button size="sm" variant="outline">
                        View All
                      </Button>
                    </div>
                    <div className="space-y-2">
                      {[
                        {
                          client: 'Acme Corp',
                          amount: '$2,400',
                          status: 'Paid',
                          color: 'text-secondary',
                        },
                        {
                          client: 'Design Studio',
                          amount: '$1,800',
                          status: 'Pending',
                          color: 'text-accent',
                        },
                        {
                          client: 'Tech Solutions',
                          amount: '$3,200',
                          status: 'Overdue',
                          color: 'text-primary',
                        },
                      ].map((invoice, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between py-2 border-b border-muted/30 last:border-0"
                        >
                          <div className="flex items-center gap-3">
                            <div className="size-8 bg-muted rounded-full flex items-center justify-center">
                              <Receipt className="size-4 text-muted-foreground" />
                            </div>
                            <span className="text-sm font-medium text-foreground">
                              {invoice.client}
                            </span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-sm font-medium text-foreground">
                              {invoice.amount}
                            </span>
                            <span
                              className={`text-xs px-2 py-1 rounded-full bg-muted/50 ${invoice.color}`}
                            >
                              {invoice.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 size-8 bg-primary rounded-full animate-pulse flex items-center justify-center">
                <Calculator className="size-4 text-primary-foreground" />
              </div>
              <div className="absolute -bottom-4 -right-4 size-8 bg-accent rounded-full animate-pulse delay-1000 flex items-center justify-center">
                <Shield className="size-4 text-accent-foreground" />
              </div>
              <div className="absolute top-1/2 -right-8 size-6 bg-secondary rounded-full animate-pulse delay-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
