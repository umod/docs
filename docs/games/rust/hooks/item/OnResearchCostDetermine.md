---
hide_table_of_contents: true
---

# OnResearchCostDetermine

## Usage

* Called when an item is being scrapped at a research table or when a blueprint is being unlocked in a tech tree
* Return a numeric value (int) to override the default value

## Examples

```csharp title=""
int? OnResearchCostDetermine(Item item, ResearchTable researchTable)
{
    Puts("OnResearchCostDetermine works!");
    return null;
}
```

```csharp title=""
int? OnResearchCostDetermine(ItemDefinition itemDefinition)
{
    Puts("OnResearchCostDetermine works!");
    return null;
}
```