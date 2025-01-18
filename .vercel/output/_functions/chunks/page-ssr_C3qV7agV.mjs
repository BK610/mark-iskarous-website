import { createClient } from '@sanity/client';

const sanityClient = createClient(
            {"apiVersion":"2025-01-16","projectId":"neusm05o","dataset":"production","useCdn":false}
          );

globalThis.sanityClient = sanityClient;
