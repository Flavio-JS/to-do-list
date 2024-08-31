import { MutationOptions, useMutation } from "@tanstack/react-query";

export type Jwt = {
  token: string;
};

export const loginUserPath = "/api/user/login";

type LoginUserProps = {
  email: string;
  password: string;
};

export const loginUser = async ({
  email,
  password,
}: LoginUserProps): Promise<Jwt> => {
  const response = await fetch(loginUserPath, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to login user");
  }

  return response.json();
};

type UseLoginUserOptions = MutationOptions<Jwt, Error, LoginUserProps>;

export const useLoginUser = (options?: UseLoginUserOptions) => {
  return useMutation<Jwt, Error, LoginUserProps>({
    ...options,
    mutationFn: (data: LoginUserProps) => loginUser(data),
  });
};
