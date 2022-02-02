---
hide_table_of_contents: true
---

# OnBradleyApcPatrol

## Usage

* Called when an APC is starts patrolling
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnBradleyApcPatrol(BradleyAPC apc)
{
    Puts("OnBradleyApcPatrol works!");
    return null;
}
```
