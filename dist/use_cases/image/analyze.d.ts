interface AnalyzeParams {
    keyword: string;
    labels: string[];
}
export default function analyze(params: AnalyzeParams): Promise<void>;
export {};
