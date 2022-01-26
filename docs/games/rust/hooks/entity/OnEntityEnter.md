---
hide_table_of_contents: true
---

# OnEntityEnter

## Usage

* Called when an entity enters a trigger (water area, radiation zone, hurt zone, etc.)
* No Return behavior

## Examples

```csharp title=""
void OnEntityEnter(TriggerBase trigger, BaseEntity entity)
{
    Puts("OnEntityEnter works!");
}
```
