import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [currentWeight, setCurrentWeight] = useState(75);
  const [targetWeight, setTargetWeight] = useState(65);
  const [points, setPoints] = useState(1250);
  const [weightHistory, setWeightHistory] = useState([
    { date: '2024-01-01', weight: 85 },
    { date: '2024-01-15', weight: 82 },
    { date: '2024-02-01', weight: 78 },
    { date: '2024-02-15', weight: 75 },
  ]);

  const progressPercentage = ((85 - currentWeight) / (85 - targetWeight)) * 100;
  const totalLost = 85 - currentWeight;

  const achievements = [
    { title: "Первые 5 кг", description: "Отличный старт!", icon: "Trophy", earned: true, points: 500 },
    { title: "Неделя без срывов", description: "Железная дисциплина", icon: "Award", earned: true, points: 300 },
    { title: "Цель -10 кг", description: "Полпути пройдено", icon: "Target", earned: false, points: 1000 },
    { title: "Месяц тренировок", description: "Привычка сформирована", icon: "Calendar", earned: false, points: 750 },
  ];

  const prizes = [
    { name: "Скидка 20% на спортивную одежду", cost: 500, available: true },
    { name: "Бесплатная консультация диетолога", cost: 800, available: true },
    { name: "Абонемент в фитнес-клуб", cost: 1500, available: false },
    { name: "Персональная тренировка", cost: 1200, available: true },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-energetic-teal/10 via-white to-energetic-yellow/10">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <Icon name="Activity" className="text-energetic-red" size={32} />
              <h1 className="text-2xl font-bold text-energetic-dark">FitPoints</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-energetic-yellow text-energetic-dark text-lg px-4 py-2">
                <Icon name="Star" size={16} className="mr-1" />
                {points} баллов
              </Badge>
              <Button className="bg-energetic-red hover:bg-energetic-red/90">
                Войти
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-energetic-dark mb-4">
            Худей и получай баллы!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Превращай свой прогресс в похудении в реальные награды. 
            Каждый потерянный килограмм = баллы для обмена на призы.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-energetic-teal/20 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center text-energetic-teal">
                <Icon name="TrendingDown" className="mr-2" />
                Прогресс
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-energetic-dark mb-2">
                -{totalLost} кг
              </div>
              <Progress value={progressPercentage} className="mb-2" />
              <p className="text-sm text-gray-600">
                {currentWeight} кг → {targetWeight} кг
              </p>
            </CardContent>
          </Card>

          <Card className="border-energetic-red/20 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center text-energetic-red">
                <Icon name="Flame" className="mr-2" />
                Активность
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-energetic-dark mb-2">
                24 дня
              </div>
              <p className="text-sm text-gray-600">
                Активных дней подряд
              </p>
            </CardContent>
          </Card>

          <Card className="border-energetic-yellow/20 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center text-energetic-dark">
                <Icon name="Users" className="mr-2" />
                Друзья
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-energetic-dark mb-2">
                12
              </div>
              <p className="text-sm text-gray-600">
                Активных друзей
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Weight Tracking */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="Scale" className="mr-2 text-energetic-teal" />
              Трекинг веса
            </CardTitle>
            <CardDescription>
              Записывай свой вес и получай баллы за прогресс
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="weight">Текущий вес (кг)</Label>
                  <Input
                    id="weight"
                    type="number"
                    value={currentWeight}
                    onChange={(e) => setCurrentWeight(Number(e.target.value))}
                    className="mt-1"
                  />
                </div>
                <Button className="bg-energetic-teal hover:bg-energetic-teal/90 w-full">
                  <Icon name="Plus" className="mr-2" size={16} />
                  Добавить запись
                </Button>
              </div>
              <div className="bg-energetic-teal/5 rounded-lg p-4">
                <h4 className="font-semibold mb-3">История изменений</h4>
                <div className="space-y-2">
                  {weightHistory.map((entry, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{entry.date}</span>
                      <span className="font-semibold">{entry.weight} кг</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="Award" className="mr-2 text-energetic-yellow" />
              Достижения
            </CardTitle>
            <CardDescription>
              Выполняй челленджи и получай дополнительные баллы
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    achievement.earned
                      ? 'border-energetic-yellow bg-energetic-yellow/10'
                      : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Icon 
                      name={achievement.icon as any} 
                      className={achievement.earned ? 'text-energetic-yellow' : 'text-gray-400'} 
                    />
                    <Badge 
                      variant={achievement.earned ? 'default' : 'secondary'}
                      className={achievement.earned ? 'bg-energetic-yellow text-energetic-dark' : ''}
                    >
                      {achievement.points} баллов
                    </Badge>
                  </div>
                  <h4 className="font-semibold text-energetic-dark">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Prizes Exchange */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="Gift" className="mr-2 text-energetic-red" />
              Обмен баллов на призы
            </CardTitle>
            <CardDescription>
              Трать заработанные баллы на полезные награды
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prizes.map((prize, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border transition-all ${
                    prize.available && points >= prize.cost
                      ? 'border-energetic-green bg-energetic-green/5'
                      : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold text-energetic-dark text-sm">
                      {prize.name}
                    </h4>
                    <Badge 
                      variant={prize.available && points >= prize.cost ? 'default' : 'secondary'}
                      className={prize.available && points >= prize.cost ? 'bg-energetic-teal text-white' : ''}
                    >
                      {prize.cost} баллов
                    </Badge>
                  </div>
                  <Button
                    className="w-full"
                    disabled={!prize.available || points < prize.cost}
                    variant={prize.available && points >= prize.cost ? 'default' : 'outline'}
                  >
                    {prize.available && points >= prize.cost ? 'Обменять' : 'Недостаточно баллов'}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center mt-12 py-12 bg-gradient-to-r from-energetic-red to-energetic-teal rounded-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Начни свой путь к цели уже сегодня!
          </h3>
          <p className="text-xl text-white/90 mb-6">
            Регистрируйся и получи 100 бонусных баллов
          </p>
          <Button className="bg-white text-energetic-red hover:bg-gray-100 text-lg px-8 py-3">
            Начать бесплатно
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;