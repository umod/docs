---
hide_table_of_contents: true
---

# OnEntityLeave

## Usage

* Called when an entity leaves a trigger (water area, radiation zone, hurt zone, etc.)
* No Return behavior

## Examples

```csharp title=""
void OnEntityLeave(TriggerBase trigger, BaseEntity entity)
{
    Puts("OnEntityLeave works!");
}
```
