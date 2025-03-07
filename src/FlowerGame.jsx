import { useState } from "react";
import { motion } from "framer-motion";

const flowers = [
  { id: 1, message: "Ты самая прекрасная!" },
  { id: 2, message: "Люблю тебя безумно!" },
  { id: 3, message: "Пусть твои мечты сбываются!" },
  { id: 4, message: "Ты моё счастье!" }
];

export default function FlowerGame() {
  const [collected, setCollected] = useState([]);
  const allCollected = collected.length === flowers.length;

  const handleCollect = (id) => {
    if (!collected.includes(id)) {
      setCollected([...collected, id]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      <h1 className="text-3xl font-bold mb-4">С 8 Марта, любимая!</h1>
      <p className="mb-6">Собери все цветы, чтобы увидеть сюрприз!</p>
      <div className="grid grid-cols-2 gap-6">
        {flowers.map((flower) => (
          <motion.div
            key={flower.id}
            className="w-32 h-32 bg-pink-400 flex items-center justify-center rounded-full cursor-pointer shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={collected.includes(flower.id) ? { scale: [1, 1.2, 1], opacity: 1 } : {}}
            onClick={() => handleCollect(flower.id)}
          >
            {collected.includes(flower.id) ? (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white text-center">{flower.message}</motion.p>
            ) : (
              <p className="text-white text-lg">🌸</p>
            )}
          </motion.div>
        ))}
      </div>
      {allCollected && (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mt-8 p-6 bg-white shadow-xl rounded-xl text-center">
          <h2 className="text-2xl font-bold text-pink-600">Ты собрала все цветы! 💐</h2>
          <p className="mt-4 text-lg">С 8 Марта, моя дорогая! Ты чудо!</p>
        </motion.div>
      )}
    </div>
  );
}