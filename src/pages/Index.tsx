import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

function Index() {
  const sections = useRef<HTMLElement[]>([]);

  useEffect(() => {
    document.documentElement.classList.add('smooth-scroll');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Creative Studio
            </h1>
            <div className="hidden md:flex gap-8">
              {['Главная', 'Портфолио', 'Обо мне', 'Услуги', 'Отзывы', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section
        id="главная"
        ref={(el) => el && (sections.current[0] = el)}
        className="min-h-screen flex items-center justify-center pt-20 px-6"
      >
        <div className="container mx-auto text-center">
          <div className="animate-float">
            <h2 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Креативный Дизайн
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
            Создаю уникальные визуальные решения, которые вдохновляют и запоминаются
          </p>
          <div className="flex gap-4 justify-center animate-slide-up">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground hover-scale"
              onClick={() => scrollToSection('портфолио')}
            >
              Посмотреть работы
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hover-scale"
              onClick={() => scrollToSection('контакты')}
            >
              Связаться
            </Button>
          </div>
        </div>
      </section>

      <section
        id="портфолио"
        ref={(el) => el && (sections.current[1] = el)}
        className="min-h-screen py-20 px-6"
      >
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Портфолио
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'UI/UX Проект',
                category: 'Веб-дизайн',
                image: 'https://cdn.poehali.dev/projects/f784e294-d950-4277-b67f-a573f7588a03/files/bf133f1f-ed8f-469d-95ad-d10ac97b2419.jpg',
              },
              {
                title: 'Брендинг',
                category: 'Графический дизайн',
                image: 'https://cdn.poehali.dev/projects/f784e294-d950-4277-b67f-a573f7588a03/files/42eaefb4-ed1e-469d-8899-0136e1a954e9.jpg',
              },
              {
                title: 'Мобильное приложение',
                category: 'UX/UI',
                image: 'https://cdn.poehali.dev/projects/f784e294-d950-4277-b67f-a573f7588a03/files/bf133f1f-ed8f-469d-95ad-d10ac97b2419.jpg',
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover-scale cursor-pointer group border-2 border-transparent hover:border-primary transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <p className="text-sm font-medium">{project.category}</p>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="обо-мне"
        ref={(el) => el && (sections.current[2] = el)}
        className="min-h-screen py-20 px-6 bg-muted/30"
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Обо мне
          </h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Привет! Я креативный дизайнер с 5+ летним опытом создания уникальных визуальных решений.
                Моя страсть — превращать идеи в запоминающиеся дизайны, которые работают.
              </p>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Специализируюсь на UI/UX дизайне, брендинге и графическом дизайне. Работал с клиентами
                из разных стран и индустрий.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <Icon name="Award" size={24} className="text-primary" />
                  <span className="font-semibold">50+ проектов</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={24} className="text-secondary" />
                  <span className="font-semibold">30+ клиентов</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="услуги"
        ref={(el) => el && (sections.current[3] = el)}
        className="min-h-screen py-20 px-6"
      >
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Услуги
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Palette',
                title: 'UI/UX Дизайн',
                description: 'Создание интуитивных и красивых интерфейсов для веб и мобильных приложений',
                color: 'primary',
              },
              {
                icon: 'Sparkles',
                title: 'Брендинг',
                description: 'Разработка фирменного стиля, логотипов и визуальной идентичности',
                color: 'secondary',
              },
              {
                icon: 'Pen',
                title: 'Графический дизайн',
                description: 'Иллюстрации, постеры, баннеры и другие визуальные материалы',
                color: 'accent',
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="p-8 hover-scale border-2 border-transparent hover:border-primary transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-${service.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon name={service.icon as any} size={32} className={`text-${service.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="отзывы"
        ref={(el) => el && (sections.current[4] = el)}
        className="min-h-screen py-20 px-6 bg-muted/30"
      >
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Отзывы
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Анна Смирнова',
                role: 'CEO, StartupHub',
                text: 'Невероятный профессионал! Дизайн превзошёл все ожидания. Креативный подход и внимание к деталям на высшем уровне.',
                rating: 5,
              },
              {
                name: 'Дмитрий Петров',
                role: 'Product Manager',
                text: 'Работать было одно удовольствие. Быстро понял задачу и предложил отличные решения. Рекомендую!',
                rating: 5,
              },
              {
                name: 'Елена Иванова',
                role: 'Marketing Director',
                text: 'Создал потрясающий фирменный стиль для нашей компании. Теперь мы выделяемся среди конкурентов!',
                rating: 5,
              },
            ].map((review, index) => (
              <Card key={index} className="p-6 hover-scale">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 italic">"{review.text}"</p>
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="контакты"
        ref={(el) => el && (sections.current[5] = el)}
        className="min-h-screen py-20 px-6"
      >
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            Контакты
          </h2>
          <Card className="p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:hello@creative.studio" className="text-muted-foreground hover:text-primary transition-colors">
                    hello@creative.studio
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-secondary" />
                </div>
                <div>
                  <p className="font-semibold">Телефон</p>
                  <a href="tel:+79991234567" className="text-muted-foreground hover:text-secondary transition-colors">
                    +7 (999) 123-45-67
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-accent" />
                </div>
                <div>
                  <p className="font-semibold">Локация</p>
                  <p className="text-muted-foreground">Москва, Россия</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-center text-muted-foreground mb-4">Следите за мной в соцсетях</p>
              <div className="flex justify-center gap-4">
                {['Instagram', 'Linkedin', 'Twitter', 'Dribbble'].map((social) => (
                  <button
                    key={social}
                    className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all hover-scale flex items-center justify-center"
                  >
                    <Icon name={social as any} size={20} />
                  </button>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground/5 py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2024 Creative Studio. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

export default Index;
