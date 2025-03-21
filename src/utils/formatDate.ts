export function formatDate(dateString: string): string {
    const date = new Date(dateString)

    return `Publicado em ${date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    })}`
}