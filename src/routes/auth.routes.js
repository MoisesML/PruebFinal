import { Router } from "express";
const router = Router();

import { signIn, signUp } from '../controllers/auth.controller'
import { checkDuplicateUsernameOrEmail, checkRolesExisted } from '../middlewares/verifySignUp'

router.post('/signup', [checkDuplicateUsernameOrEmail, checkRolesExisted], signUp)
router.post('/signin', signIn)

export default router;