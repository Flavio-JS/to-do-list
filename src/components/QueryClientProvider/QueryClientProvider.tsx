"use client";

import {
  QueryClient,
  QueryClientProvider as QueryClientProviderRQ,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export const QueryClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <QueryClientProviderRQ client={queryClient}>
      {children}
    </QueryClientProviderRQ>
  );
};
