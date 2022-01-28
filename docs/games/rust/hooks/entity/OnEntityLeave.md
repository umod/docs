---
hide_table_of_contents: true
---

# OnEntityLeave

## Usage

* Called when an entity leaves a trigger (water area, radiation zone, hurt zone, etc.)
* No return behavior

## Examples

```csharp title=""
void OnEntityLeave(TriggerBase trigger, BaseEntity entity)
{
    Puts("OnEntityLeave works!");
}
```

```csharp title=""
void OnEntityLeave(TriggerComfort trigger, BaseEntity entity)
{
    Puts("OnEntityLeave works!");
}
```
