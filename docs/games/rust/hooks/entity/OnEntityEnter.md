---
hide_table_of_contents: true
---

# OnEntityEnter

## Usage

* Called when an entity enters a trigger (water area, radiation zone, hurt zone, etc.)
* No return behavior

## Examples

```csharp title=""
void OnEntityEnter(TriggerBase trigger, BaseEntity entity)
{
    Puts("OnEntityEnter works!");
}
```

```csharp title=""
void OnEntityEnter(TriggerComfort trigger, BaseEntity entity)
{
    Puts("OnEntityEnter works!");
}
```
