import router from "../controllers/user.controller";
const authMiddleware = require("../middlewares/auth.middleware");

// Public routes
router.post("/register", userController.register);
router.post("/login", userController.login);

// Protected routes (require authentication)
router.use(authMiddleware.verifyToken);

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
