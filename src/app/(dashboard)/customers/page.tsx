"use client";

import { DashboardHeader } from "@/components/dashboard-header";
import { PageTransition } from "@/components/page-transition";
import { PageContainer } from "@/components/page-container";
import { DataTable } from "@/components/data-table";
import { ErrorState } from "@/components/empty-state";
import { Skeleton } from "@/components/ui/skeleton";
import { useCustomers } from "@/hooks/use-dashboard-data";

export default function CustomersPage() {
  const { data: customers, isLoading, isError, refetch } = useCustomers();

  return (
    <>
      <DashboardHeader title="Customers" description="Manage and analyze your customer base" />
      <PageTransition>
        <PageContainer>
          {isLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-9 w-full max-w-sm" />
              <Skeleton className="h-[400px] w-full rounded-xl" />
            </div>
          ) : isError ? (
            <ErrorState onRetry={() => refetch()} />
          ) : (
            customers && <DataTable data={customers} />
          )}
        </PageContainer>
      </PageTransition>
    </>
  );
}
