const express = require("express");
const router = express.Router();

class UserController {
	async getAllUsers(req, res) {
		try {
			// logic to get all users
			res.status(200).json({ message: "Users retrieved successfully" });
		} catch (error) {
			res.status(500).json({ message: "Error retrieving users" });
		}
	}

	async getUserById(req, res) {
		try {
			// logic to get user by id
			res.status(200).json({ message: "User retrieved successfully" });
		} catch (error) {
			res.status(404).json({ message: "User not found" });
		}
	}

	async createUser(req, res) {
		try {
			// logic to create user
			res.status(201).json({ message: "User created successfully" });
		} catch (error) {
			res.status(400).json({ message: "Error creating user" });
		}
	}

	async updateUser(req, res) {
		try {
			// logic to update user
			res.status(200).json({ message: "User updated successfully" });
		} catch (error) {
			res.status(404).json({ message: "User not found" });
		}
	}

	async deleteUser(req, res) {
		try {
			// logic to delete user
			res.status(200).json({ message: "User deleted successfully" });
		} catch (error) {
			res.status(404).json({ message: "User not found" });
		}
	}
}

const userController = new UserController();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
