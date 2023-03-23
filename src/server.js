import app from './app.js';

const { PORT } = process.env;

const start = () => {
    try {
        app.listen(PORT, () => {
      console.log(`🍏 Server is running on: http://localhost:${PORT} ... 🌊`);
        });
        // Catch all routes that were not found and send this response
        app.use((req, res) => {
            res.status(404).json({
                status: 404,
                success: false,
                message: "🍎 Route doesn't exist.😬",
            });
        });
    } catch (error) {
        if (error) {
            console.log(`🍎 Error occurred when starting server: ${error.message}`);
        } else {
            return error.message;
        }
    }
};

start();
