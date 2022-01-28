---
hide_table_of_contents: true
---

# OnEntityBuilt

## Usage

* Called when any structure is built (walls, ceilings, stairs, etc.)
* No return behavior

## Examples

```csharp title=""
void OnEntityBuilt(Planner plan, GameObject go)
{
    Puts("OnEntityBuilt works!");
}
```
